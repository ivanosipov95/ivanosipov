import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';

@NgModule({
  declarations: [
    components.HeaderComponent,
    components.NavMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components.HeaderComponent,
    components.NavMenuComponent
  ]
})
export class SharedModule { }
