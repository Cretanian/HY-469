import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TaskModel } from "../../models";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as _ from "lodash";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  private hostURL: string;
  private headers = { "content-type": "application/json" };

  constructor(private http: HttpClient) {
    this.hostURL = environment.host;
  }

  public getMessagesFrom(contact: string) {
    return this.http.post(
      `${this.hostURL}/api/messages/getMessagesFrom`,
      { contact: contact },
      { headers: this.headers }
    );
  }

  public reactTo(contact: string, messageID: number, emojiSrc: string) {
    console.log('halo');
    return this.http.post(
        `${this.hostURL}/api/messages/reactTo`,
        {
            contact: contact,
            messageID: messageID,
            emojiSrc: emojiSrc
        },
        { headers: this.headers }
    ).subscribe((status) => {
        console.log('status code: ' + status);
    });
  }
}
