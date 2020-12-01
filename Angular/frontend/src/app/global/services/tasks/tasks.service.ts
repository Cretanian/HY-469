import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private hostURl: string;

  constructor(private http: HttpClient) {
    this.hostURl = environment.host;
  }

  public getAll(): Observable<TaskModel[]> {
    return this.http
      .get<TaskModel[]>(`${this.hostURl}/api/tasks`)
      .pipe(map(result => _.map(result, (t) => new TaskModel(t))));
  }

  public getById(id: string): Observable<TaskModel> {
    return this.http
      .get<TaskModel>(`${this.hostURl}/api/tasks/${id}`)
      .pipe(map(result => new TaskModel(result)));
  }

  public create(resource: TaskModel): Observable<TaskModel> {
    return this.http
      .post<TaskModel>(`${this.hostURl}/api/tasks`, resource)
      .pipe(map(result => new TaskModel(result)));
  }

  public update(resource: TaskModel): Observable<TaskModel> {
    return this.http
      .put<TaskModel>(`${this.hostURl}/api/tasks/${resource._id}`, resource)
      .pipe(map(result => new TaskModel(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/tasks/${id}`);
  }

}
