import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: 'list',
        component: TasksListComponent
      },
      {
        path: 'create',
        component: TasksEditComponent,
        data: { editMode: 'create' }
      },
      {
        path: 'edit/:id',
        component: TasksEditComponent,
        data: { editMode: 'edit' }
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
