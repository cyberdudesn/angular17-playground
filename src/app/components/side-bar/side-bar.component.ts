import { Component, Input } from '@angular/core';
import { Topic } from '../../model/topic.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Input({ required: true }) topics!: Topic[];
}
