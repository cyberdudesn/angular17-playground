import { Component } from '@angular/core';
import { CanColorDirective } from '../directives/can-color.directive';
import { CanAppearanceDirective } from '../directives/can-appearance.directive';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `<strong>Notification</strong>
    <span><ng-content></ng-content></span>`,
  styles: `
  :host {
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  strong {
    margin-bottom: 10px;
  }
  `,
  hostDirectives: [
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance: type'],
    },
    {
      directive: CanColorDirective,
      inputs: ['color'],
    },
  ],
})
export class BannerComponent {}
