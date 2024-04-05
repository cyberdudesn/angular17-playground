import { Component, signal } from '@angular/core';
import { TodoItem } from './model/todo.model';

@Component({
  selector: 'app-getting-started-signal',
  template: `<h2>Getting started with Signal</h2>
    <div class="todo-wrapper">
      <app-todo-list [todoList]="todoList()"></app-todo-list>
      <app-todo-form (todoAdded)="onTodoAdded($event)"></app-todo-form>
    </div>`,
})
export class GettingStartedSignalComponent {
  todoList = signal<TodoItem[]>([]);

  onTodoAdded(todoItem: TodoItem) {
    this.todoList.update((todoList) => [...todoList, todoItem]);
    console.log(this.todoList());
  }
}
