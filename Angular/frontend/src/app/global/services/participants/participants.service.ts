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
export class ParticipantsService {
  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll() {
    const headers = { "content-type": "application/json" };
    return this.http.get(`${this.hostURl}/api/participants/getAll`, {
      headers: headers,
    });
  }

  public mute(name: string) {
    const headers = { "content-type": "application/json" };
    return this.http
      .post(
        `${this.hostURl}/api/participants/muteParticipant`,
        {
          name: name,
        },
        { headers: headers }
      )
      .subscribe();
  }
}
