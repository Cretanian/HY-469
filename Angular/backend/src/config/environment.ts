export const config = {

  // application environment mode
  environment: process.env.ENVIRONMENT,

  // host domain options
  protocol: process.env.PROTOCOL || 'http',
  host: process.env.HOST || 'localhost',
  exposedPort: process.env.EXPOSED_PORT || 80,
  port: 80, // !Do NOT change this option, because it is used by reverse-proxy

  // MongoDB connection options
  mongo: {
    uri: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/?authSource=admin`,
    options: {
      dbName: process.env.DB_NAME,
      user: process.env.DB_ROOT_USERNAME,
      pass: process.env.DB_ROOT_PASSWORD,
    }
  },

  // sockets options
  sockets: {
    path: '/socket.io-client'
  },

  // redis options
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  },

  // minio options
  minio: {
    host: process.env.MINIO_HOST,
    port: process.env.MINIO_PORT,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
    bucketName: process.env.MINIO_BUCKET_NAME
  }

};


/**
 * Indicates whether process is in production mode
 *
 * @export
 * @returns {boolean}
 */
export function isProd(): boolean {
  return config.environment === 'production';
}

/**
 * Indicates whether process is in development mode
 *
 * @export
 * @returns {boolean}
 */
export function isDev(): boolean {
  return config.environment === 'development';
}

/**
 * Get full host domain
 * e.g. http://localhost:80
 *
 * @export
 * @returns {string}
 */
export function getHostDomain(): string {
  return `${config.protocol}://${config.host}:${config.exposedPort}`;
}
