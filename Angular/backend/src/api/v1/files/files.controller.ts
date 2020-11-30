import Multer from 'multer';
import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService } from '@app/services';

export class FilesController {

  /**
   * Apply all routes for files
   * POST /files/upload               Upload a new file
   * GET /files/download/:filename    Download a file by its name
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();

    router
      .post('/upload', this.upload())
      .get('/download/:filename', this.download());

    return router;
  }

  /**
   * Uploads a new file to minio server
   */
  public upload() {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        return Multer({ limits: { fileSize: 10 * 1024 * 1024, files: 1 } }) // file size in bytes (10mb)
          .single('file')(req, res, async (err: any) => {
            if (err) { return next(new BadRequest(err.message)); }

            const minioService = DIContainer.get(MinioService);

            const uploadFileName = await minioService
              .uploadFile(req.file.originalname, req.file.buffer);

            // file uploaded successfully
            delete req.file.buffer;
            return res.send({ ...req.file, filename: uploadFileName });
          });

      } catch (e) {
        next(e);
      }
    };
  }

  /**
   * Downloads a file by its name
   */
  public download() {
    return async (req: Request, res: Response, next?: NextFunction): Promise<void> => {
      try {
        const minioService = DIContainer.get(MinioService);

        const file = await minioService.downloadFile(req.params.filename);
        file.pipe(res);

      } catch (e) {
        if (e.code === 'NoSuchKey') {
          return next(new NotFound('File not found'));
        }

        next(e);
      }
    };
  }

}
