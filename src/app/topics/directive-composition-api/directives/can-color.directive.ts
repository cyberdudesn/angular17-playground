import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[can-color]',
  standalone: true,
})
export class CanColorDirective {
  @Input() color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  protected get computedHostClass() {
    return `df-${this.color}`;
  }
}
