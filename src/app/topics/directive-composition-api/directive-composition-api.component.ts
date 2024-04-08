import { Component, OnInit } from '@angular/core';
import { ChipComponent } from './components/chip.component';
import { ButtonComponent } from './components/button.component';
import { BannerComponent } from './components/banner.component';
import { CanColorDirective } from './directives/can-color.directive';
import { CanAppearanceDirective } from './directives/can-appearance.directive';

@Component({
  selector: 'app-directive-composition-api',
  templateUrl: './directive-composition-api.component.html',
  styleUrls: ['./directive-composition-api.component.scss'],
  standalone: true,
  imports: [
    ChipComponent,
    ButtonComponent,
    BannerComponent,
    CanColorDirective,
    CanAppearanceDirective,
  ],
})
export class DirectiveCompositionApiComponent {
  alert(str: string) {
    alert(str);
  }
}
