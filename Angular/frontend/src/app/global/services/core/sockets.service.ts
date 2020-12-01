import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  private socket: any;
  private hostUrl: string;
  private isInitialized = false;
  private onMessageObserver: Subject<{ event: string, msg: any }>;

  constructor() {
    this.hostUrl = environment.host;
  }

  /**
   * Init and connect sockets to server
   */
  public async initAndConnect() {
    if (!this.isInitialized) {
      await this.init();
    }
    this.connect();
  }

  /**
   * Connect sockets to server
   */
  public connect() {
    if (this.isInitialized && this.socket) {
      if (!this.isConnected()) {
        this.socket.connect();
      }
    }
  }

  /**
   * Disconnect sockets from server
   */
  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  /**
   * Indicates whether the sockets is connected or not
   */
  public isConnected(): boolean {
    if (this.socket) {
      return this.socket.connected;
    }
    return false;
  }

  /**
   * Observe socket messages of specific event
   */
  public syncMessages(event: string): Observable<{ event: string, message: any }> {
    return new Observable(observer => {
      this.onMessageObserver.subscribe((data) => {
        if (data.event === event) {
          observer.next({ event: data.event, message: data.msg });
        }
      });
    });
  }

  /**
   * Observe all socket messages
   */
  public syncAllMessages(): Observable<{ event: string, message: any }> {
    return new Observable(observer => {
      this.onMessageObserver.subscribe((data) => {
        observer.next({ event: data.event, message: data.msg });
      });
    });
  }

  //#region Private methods

  private async init(): Promise<void> {

    if (this.isInitialized) { return; }
    if (this.isConnected()) { return; }

    this.socket = io(this.hostUrl, {
      path: `/socket.io-client`,
      query: {
        autoConnect: false
      }
    });

    const self = this;
    self.socket.on('connect', () => { self.onConnect(); });
    self.socket.on('disconnect', () => { self.onDisconnect(); });
    self.socket.on('connect_error', (err: any) => { self.onConnectionError(err); });
    self.socket.on('error', (err: any) => { self.onError(err); });

    self.onMessageObserver = new Subject();
    self.socket.on('server:event', (event: string, msg: any) => {
      self.onMessageObserver.next({ event, msg });
    });

    this.isInitialized = true;

  }

  private onConnect() {
    console.log(`Socket:connected at ${new Date()}`);
  }

  private onDisconnect() {
    console.log(`Socket:disconnected at ${new Date()}`);
  }

  private onConnectionError(err) {
    console.log('Socket:connect_error', err);
  }

  private onError(err) {
    console.log('Socket:error', err);
  }

  //#endregion Private methods
  // ---------------------------------------

}
