import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../model/todo.model';

import dayjs from 'dayjs';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  @Output() todoAdded: EventEmitter<TodoItem> = new EventEmitter();

  todoText = signal('');

  addTodo() {
    const todo: TodoItem = {
      text: this.todoText(),
      createdDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
    this.todoAdded.emit(todo);
    this.todoText.set('');
  }
}
