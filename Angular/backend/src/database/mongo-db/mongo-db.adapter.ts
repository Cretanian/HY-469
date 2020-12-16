import _ from 'lodash';
import { connect, ConnectionOptions } from 'mongoose';
import { config } from '@app/config/environment';


export class MongoAdapter {

  public static async connect(): Promise<void> {

    const defaultOptions: ConnectionOptions = {
      useNewUrlParser: true,            // make all connections set the useNewUrlParser option
      useFindAndModify: false,          // use native `findOneAndUpdate()` rather than `findAndModify()`
      useCreateIndex: true,             // Automatic index builds
      autoIndex: false,                 // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 1000,          // Reconnect every 1s
      bufferMaxEntries: 0,              // Fail when the driver is not connected
      connectTimeoutMS: 10000,          // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000,           // Close sockets after 45 seconds of inactivity
      family: 4,                        // Use IPv4, skip trying IPv6
      useUnifiedTopology: true          // Use the new Server Discover and Monitoring engine
    };

    // merge default options with config mongo options
    const options = _.merge(defaultOptions, config.mongo.options);

    // Connect to DB
    await connect(config.mongo.uri, options);
  }

}
