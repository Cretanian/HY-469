import 'reflect-metadata';
import { Container } from 'inversify';
import { SocketsService } from './sockets';
import { MinioService } from './minio';

const DIContainer = new Container();


// Register sockets service
DIContainer
  .bind<SocketsService>(SocketsService)
  .toConstantValue(new SocketsService());

// Register minio service
DIContainer
  .bind<MinioService>(MinioService)
  .toConstantValue(new MinioService());


export { DIContainer };
