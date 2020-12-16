import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { TaskModel } from "../../models";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as _ from "lodash";
import { SocketsService } from "../core/sockets.service";
import { IpService } from "./ip.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private hostURL: string;
  private headers = { "content-type": "application/json" };

  constructor(private http: HttpClient, private ipService: IpService) {
    this.hostURL = environment.host;
  }

  public setUserIP(username: string) {
    //find ip of client
    let ip: string;
    this.ipService.getIPAddress().subscribe((res: any) => {
      ip = res.ip;
      return this.http
        .post(
          `${this.hostURL}/api/user/setUserIP`,
          {
            ip: ip,
            username: username,
          },
          { headers: this.headers }
        )
        .subscribe();
    });
  }

  public getUserData(ip: number) {
    return this.http.post(
      `${this.hostURL}/api/user/getUserData`,
      {
        ip: ip,
      },
      { headers: this.headers }
    );
  }

  public acceptCall(){
    return this.http.post(
      `${this.hostURL}/api/user/acceptCall`,
      {},
      { headers: this.headers }   
    ).subscribe();
  }
}
