import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './topics/getting-started-signal/components/todo-list/todo-list.component';
import { TodoFormComponent } from './topics/getting-started-signal/components/todo-form/todo-form.component';
import { TodoItem } from './topics/getting-started-signal/model/todo.model';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { Topic } from './model/topic.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  topics: Topic[] = [
    {
      label: 'Getting started with Signal',
      path: 'getting-started-signal',
    },
    {
      label: 'Directive composition API',
      path: 'directive-composition-api',
    },
    {
      label: 'Dependency injection in-depth',
      path: 'dependency-injection-in-depth',
    },
    {
      label: 'Trying out NgTemplateOutlet',
      path: 'ng-template-outlet',
    },
    {
      label: 'Reusable reactive form',
      path: 'reusable-reactive-form',
    },
  ];
}
