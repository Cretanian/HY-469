import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class ChatHeadersService {
  
    private hostURl: string;
  
    constructor(private http: HttpClient) {
      this.hostURl = environment.host;
    }
  
    public getAll(person: string){
        const headers = { 'content-type': 'application/json'}
        return this.http.post(`${this.hostURl}/api/chat-headers/getAll`,{person: person},{'headers':headers});
    }
    public getAll2(person: string){
      const headers = { 'content-type': 'application/json'}
      return this.http.post(`${this.hostURl}/api/chat-headers/getAll2`,{person: person},{'headers':headers});
  }
  
  }
