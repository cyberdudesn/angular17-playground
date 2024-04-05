import { NgModule } from '@angular/core';
import { GettingStartedSignalComponent } from './getting-started-signal.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  imports: [TodoListComponent, TodoFormComponent],
  declarations: [GettingStartedSignalComponent],
  bootstrap: [GettingStartedSignalComponent],
})
export class GettingStartedSignalModule {}
