import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContainerRoutingModule } from './app-container-routing.module';
import { AppContainerComponent } from './containers/app-container/app-container.component';

@NgModule({
  declarations: [AppContainerComponent],
  imports: [
    CommonModule,
    AppContainerRoutingModule
  ]
})
export class AppContainerModule {

}
