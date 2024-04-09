import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveCompositionApiComponent } from './directive-composition-api.component';
import { ChipComponent } from './components/chip.component';
import { ButtonComponent } from './components/button.component';
import { BannerComponent } from './components/banner.component';
import { CanColorDirective } from './directives/can-color.directive';
import { CanAppearanceDirective } from './directives/can-appearance.directive';

const routes: Routes = [
  {
    path: '',
    component: DirectiveCompositionApiComponent,
  },
];

@NgModule({
  declarations: [DirectiveCompositionApiComponent],
  imports: [
    ChipComponent,
    ButtonComponent,
    BannerComponent,
    RouterModule.forChild(routes),
  ],
})
export class DirectiveCompositionApiModule {}
