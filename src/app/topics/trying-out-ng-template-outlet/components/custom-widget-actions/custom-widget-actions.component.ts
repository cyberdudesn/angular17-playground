import { Component, Inject, inject } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-widget-actions',
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="reloadCopy()">Reload and Copy</button> `,
})
export class CustomWidgetActionComponent {
  widget = inject(WeatherWidgetComponent);

  reloadCopy() {
    this.widget.actions.reload();
    this.widget.actions.copy();
  }
}
