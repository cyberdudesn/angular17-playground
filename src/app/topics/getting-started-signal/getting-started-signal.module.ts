import { NgModule, Component } from '@angular/core';
import { GettingStartedSignalComponent } from './getting-started-signal.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GettingStartedSignalComponent,
  },
];

@NgModule({
  imports: [
    TodoListComponent,
    TodoFormComponent,
    RouterModule.forChild(routes),
  ],
  declarations: [GettingStartedSignalComponent],
})
export class GettingStartedSignalModule {}
