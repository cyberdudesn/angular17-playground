import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[can-appearance]',
  standalone: true,
})
export class CanAppearanceDirective {
  @Input() appearance: 'solid' | 'stroked' = 'solid';

  @HostBinding('class')
  protected get computedHostClass() {
    return `df-${this.appearance}`;
  }
}
