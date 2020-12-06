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

  public sendMessage(
    destination: {
      contact?: string,
      teamName?: string,
      conversationID?: number
    },
    sender: string,
    message: string
  ){
    console.log('service, message: ' + message);
    return this.http.post(
      `${this.hostURL}/api/messages/sendMessage`,
      {
          destination: destination,
          sender: sender,
          message: message
      },
      { headers: this.headers }
    )
  }

  public getTeamConversation(teamName: string, conversationID: number){
    return this.http.post(
      `${this.hostURL}/api/messages/getTeamConversation`,
      { teamName: teamName, conversationID: conversationID },
      { headers: this.headers }
    )
  }

  public getTeamConversations(teamName: string){
    return this.http.post(
      `${this.hostURL}/api/messages/getTeamConversations`,
      { teamName: teamName },
      { headers: this.headers }
    )
  }

  public getMessagesFrom(contact: string) {
    return this.http.post(
      `${this.hostURL}/api/messages/getMessagesFrom`,
      { contact: contact },
      { headers: this.headers }
    );
  }

  public reactTo(
      destination: {
        contat?: string,
        teamName?: string,
        conversationID?: number
      },
      messageID: number,
      emojiSrc: string
    ){
    return this.http.post(
        `${this.hostURL}/api/messages/reactTo`,
        {
            destination: destination,
            messageID: messageID,
            emojiSrc: emojiSrc
        },
        { headers: this.headers }
    ).subscribe((status) => {
        console.log('status code: ' + status);
    });
  }
}
