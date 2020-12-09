import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { TaskModel } from "../../models";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as _ from "lodash";

@Injectable({
  providedIn: "root",
})
export class TVService {
  private hostURL: string;
  private headers = { "content-type": "application/json" };

  constructor(
      private http: HttpClient,
  ){

    this.hostURL = environment.host;
  }

  public changeGrid(gridID: number){
    return this.http.post(
      `${this.hostURL}/api/tv/changeGrid`,
      {
          gridID: gridID
      },
      { headers: this.headers }   
    ).subscribe();
  }
}