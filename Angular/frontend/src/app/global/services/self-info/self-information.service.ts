import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { TaskModel } from "../../models";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as _ from "lodash";

@Injectable({
  providedIn: "root",
})
export class SelfInformationService {
  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll() {
    const headers = { "content-type": "application/json" };
    return this.http.get(`${this.hostURl}/api/selfInformation/getAll`, {
      headers: headers,
    });
  }

  public muteSelf() {
    const headers = { "content-type": "application/json" };
    return this.http
      .post(
        `${this.hostURl}/api/selfInformation/muteSelf`,
        {},
        { headers: headers }
      )
      .subscribe();
  }
}
