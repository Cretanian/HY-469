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
export class InOutDevicesService {

  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll(person: string){
      const headers = { 'content-type': 'application/json'}
      return this.http.post(`${this.hostURl}/api/in-out-devices/getAll`,{person: person},{'headers':headers});
  }  
}
