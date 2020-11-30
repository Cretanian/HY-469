import UUID from 'uuid/v1';
import * as Minio from 'minio';
import { Stream } from 'stream';
import { injectable } from 'inversify';
import { logger } from '@app/utils/logger';
import { config } from '@app/config/environment';


@injectable()
export class MinioService {

  private minioClient: Minio.Client;

  constructor() { }

  /**
   * Setup minio client and connect to minio server.
   * Also, it creates the default bucket if not exists
   *
   * @returns {Promise<void>}
   */
  public async setup(): Promise<void> {
    try {
      if (this.minioClient) { return; }

      const minioSetupPromise = new Promise((resolve, reject) => {

        const clientOptions: Minio.ClientOptions = {
          useSSL: false,
          endPoint: config.minio.host,
          port: Number(config.minio.port),
          accessKey: config.minio.accessKey,
          secretKey: config.minio.secretKey
        };

        // Instantiate the minio client with options
        this.minioClient = new Minio.Client(clientOptions);

        // create new bucket if not exists
        const bucketName = config.minio.bucketName;
        this.minioClient.bucketExists(bucketName, (error, exists) => {
          if (error) { return reject(error); }

          if (!exists) {
            this.minioClient.makeBucket(bucketName, 'us-east-1', err => {
              if (err) { return reject(err); }

              return resolve();
            });

          } else {
            return resolve();
          }
        });

      });

      await minioSetupPromise;
      logger.info(`Minio client connected at: http://${config.minio.host}:${config.minio.port}`);

    } catch (e) {
      logger.error('Minio client failed to be initiated', e);
    }
  }

  /**
   * Uploads a file to minio server
   *
   * @param {string} originalFileName
   * @param {any} stream
   * @returns {Promise<string>}
   */
  public async uploadFile(originalFileName: string, stream: any): Promise<string> {
    const filename = `${UUID()}-${originalFileName}`;

    await this.minioClient
      .putObject(config.minio.bucketName, filename, stream);

    return filename;
  }

  /**
   * Retrieves a file from minio server
   *
   * @param {string} filename
   * @returns {Promise<Stream>}
   */
  public downloadFile(filename: string): Promise<Stream> {
    return this.minioClient
      .getObject(config.minio.bucketName, filename);
  }

}
