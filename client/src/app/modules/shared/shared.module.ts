import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';
import * as services from './services';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    components.HeaderComponent,
    components.NavMenuComponent,
    components.TransitionLayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    components.HeaderComponent,
    components.NavMenuComponent,
    components.TransitionLayerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [services.D3Service]
    }
  }
}
