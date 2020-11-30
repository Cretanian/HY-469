import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks.routing';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [
    TasksComponent,
    TasksListComponent,
    TasksEditComponent,
  ]
})
export class TasksModule { }
