import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';
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
export class SharedModule { }
