import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { TaskModel } from "../../models";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as _ from "lodash";
import { Pin } from "src/app/pages/Wall/pinned/Pin";

@Injectable({
  providedIn: "root",
})
export class PinboardService {
  private hostURL: string;
  private headers = { "content-type": "application/json" };

  constructor(
      private http: HttpClient,
  ){

    this.hostURL = environment.host;
  }

  public getAll(){
    return this.http.get(
        `${this.hostURL}/api/pinboard/getAll`,
        { headers: this.headers }   
      )
  }

  public addPin(pin: Pin){
    return this.http.post(
      `${this.hostURL}/api/pinboard/addPin`,
      {
        pin: pin
      },
      { headers: this.headers }   
    ).subscribe();
  }
}