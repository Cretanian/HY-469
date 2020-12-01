import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/global/services';
import { TaskModel } from 'src/app/global/models';

@Component({
  selector: 'ami-fullstack-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  public tasks: TaskModel[];

  constructor(private tasksService: TasksService) {
    this.tasks = [];
  }

  ngOnInit() { this.getTasks(); }

  private async getTasks() {
    try {
      this.tasks = await this.tasksService
        .getAll()
        .toPromise();

    } catch (e) {
      console.error(e);
    }
  }
}
