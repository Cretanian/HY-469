import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import { MethodNotAllowed } from 'http-errors';
import { INTERNAL_SERVER_ERROR, UNPROCESSABLE_ENTITY } from 'http-status-codes';
import { Api } from './api';
import { logger } from './utils/logger';
import { MongoAdapter } from './database';
import { config, getHostDomain } from './config/environment';
import { DIContainer, SocketsService, MinioService } from './services';


export class App {

  private app: express.Application;

  constructor() { }

  /**
   * Initializes application and starts the server
   */
  public async start() {
    try {
      // Setup and connect database
      await this.setupDatabase();

      // Setup express and API routes
      this.app = await this.setupExpressApp();
      const server = http.createServer(this.app);

      // Start socket server
      const socketService = DIContainer.get(SocketsService);
      await socketService.start(server);

      // Setup minio client
      const minioService = DIContainer.get(MinioService);
      await minioService.setup();

      // Finally start server
      server.listen(config.port, () => {
        logger.info(`Server started in "${config.environment}" mode. Available on: ${getHostDomain()}`);
      });

    } catch (e) {
      logger.error(`Failed to start server due to error: `, e);
      process.exit(-1);
    }
  }

  // #region Private methods

  /**
   * Setup express application
   *
   * @private
   * @returns {Promise<express.Application>}
   */
  private async setupExpressApp(): Promise<express.Application> {
    const application = express();

    application
      .set('port', config.port)
      .set('env', config.environment)

      .use(cors())
      .use(morgan('dev'))
      .use(bodyParser.json({ limit: '5MB' }))
      .use(bodyParser.urlencoded({ extended: true }))
      .use(methodOverride());

    // setup primary app routes.
    application
      .use(await Api.applyRoutes(application));

    // all other routes should return 405 error (Method Not Allowed)
    application
      .route('/*')
      .get((req, res) => { throw new MethodNotAllowed(); });

    // global error handler
    // !it has to be the last
    application.use(this.handlerError);

    return application;
  }

  /**
   * Setup and connect to database
   *
   * @private
   */
  private async setupDatabase() {
    try {
      // connect to database
      await MongoAdapter.connect();
      logger.info(`MongoDB is connected on ${config.mongo.uri}`);
      const Str = mongoose.Schema.Types.String as any;
      Str.checkRequired((v: string) => v != null);

    } catch (e) {
      logger.error(`MongoDB connection error: `, e);
      throw e;
    }
  }

  /**
   * Middleware for handling errors
   *
   * @private
   * @param {*} error
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  private handlerError(error: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    let status = error.status || INTERNAL_SERVER_ERROR;
    const code = error.code || error.name || 'InternalServerError';
    const message = error.message || 'Internal Server Error';
    const errors = error.errors || undefined;

    // cast mongoose errors to bad request
    if (error instanceof mongoose.Error.CastError
      || error instanceof mongoose.Error.ValidationError) {
      status = UNPROCESSABLE_ENTITY;
    }

    res.status(status).json({ status, code, message, errors });
  }

  // #endregion Private methods
  // ---------------------------------------


}
