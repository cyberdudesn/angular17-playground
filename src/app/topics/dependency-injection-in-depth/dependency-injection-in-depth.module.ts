import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionInDepthComponent } from './dependency-injection-in-depth.component';
import { LoggerComponent } from './components/logger.component';
import { ExperimentalLoggerService } from './services/experimental-logger.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: DependencyInjectionInDepthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule, LoggerComponent],
  declarations: [DependencyInjectionInDepthComponent],
  providers: [
    /*ExperimentalLoggerService*/
  ],
})
export class DependencyInjectionInDepthModule {}
