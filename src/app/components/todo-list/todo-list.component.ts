import { Component, computed, input, model, signal } from '@angular/core';
import { TodoItem } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoList = input<TodoItem[]>([]);
  filterText = signal<string>('');

  filtered = computed(() =>
    this.todoList()?.filter(({ text }) => text.startsWith(this.filterText()));
  );

  updateFilter(filterText: string) {
    this.filterText.set(filterText);
  }
}
