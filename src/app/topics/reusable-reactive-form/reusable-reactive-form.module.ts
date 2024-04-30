import { NgModule, Component } from '@angular/core';
import { ReusableReactiveFormComponent } from './reusable-reactive-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from './components/address-group.component';

const routes: Routes = [
  {
    path: '',
    component: ReusableReactiveFormComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AddressGroupComponent,
  ],
  declarations: [ReusableReactiveFormComponent],
})
export class ReusableReactiveFormModule {}
