import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-composition-api',
  templateUrl: './directive-composition-api.component.html',
  styleUrls: ['./directive-composition-api.component.scss'],
})
export class DirectiveCompositionApiComponent {
  alert(str: string) {
    alert(str);
  }
}
