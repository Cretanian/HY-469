import http from 'http';
import { injectable } from 'inversify';
import { SocketServer } from './socket-server';


@injectable()
export class SocketsService {

  private socketServer: SocketServer;

  constructor() { }

  /**
   * Init and start socket server
   *
   * @param {http.Server} server
   * @returns
   */
  public async start(server: http.Server) {
    if (this.socketServer) { return; }

    this.socketServer = new SocketServer();
    await this.socketServer.start(server);
  }

  /**
   * Broadcast event to all
   *
   * @param {string} event
   * @param {*} message
   * @returns
   */
  public broadcast(event: string, message: any) {
    this.socketServer.io.emit('server:event', event, message);
  }

}
