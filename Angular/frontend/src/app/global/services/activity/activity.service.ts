import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class ActivityService {
  
    private hostURl: string;
  
    constructor(private http: HttpClient) {
      this.hostURl = environment.host;
    }
     
    public getAll(){
        const headers = { 'content-type': 'application/json'}
        return this.http.get(`${this.hostURl}/api/activity/getAll`,{'headers':headers});
    } 
  }
