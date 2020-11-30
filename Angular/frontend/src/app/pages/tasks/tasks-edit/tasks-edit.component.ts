import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskModel } from 'src/app/global/models';
import { TasksService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss']
})
export class TasksEditComponent implements OnInit {

  public isEditMode: boolean;
  public isCreateMode: boolean;
  public task: TaskModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tasksService: TasksService,
  ) {
    this.task = new TaskModel();
  }

  ngOnInit() {
    this.isEditMode = this.route.snapshot.data.editMode === 'edit';
    this.isCreateMode = !this.isEditMode;

    this.getById();
  }

  public async onSaveBtnClick() {
    try {

      if (this.isEditMode) {
        // Update existing task
        await this.tasksService
          .update(this.task)
          .toPromise();

      } else {
        // create new task
        await this.tasksService
          .create(this.task)
          .toPromise();

      }

      this.goToList();
    } catch (e) {
      console.error(e);
    }
  }

  public goToList() {
    if (this.isEditMode) {
      this.router.navigate(['../../list'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../list'], { relativeTo: this.route });
    }
  }

  private async getById() {
    try {
      this.task = this.isEditMode
        ? await this.tasksService
          .getById(this.route.snapshot.params.id)
          .toPromise()
        : new TaskModel();

    } catch (e) {
      console.error(e);
      this.router.navigate(['../../list'], { relativeTo: this.route });
    }
  }
}
