import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItem } from './model/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoList = signal<TodoItem[]>([]);

  onTodoAdded(todoItem: TodoItem) {
    this.todoList.update((todoList) => [...todoList, todoItem]);
    console.log(this.todoList());
  }
}
