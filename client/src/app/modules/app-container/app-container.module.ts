import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppContainerRoutingModule} from './app-container-routing.module';
import {AppContainerComponent} from './containers/app-container/app-container.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [AppContainerComponent],
  imports: [
    CommonModule,
    AppContainerRoutingModule,
    SharedModule
  ]
})
export class AppContainerModule {

}
