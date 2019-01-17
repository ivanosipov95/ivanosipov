import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';

@NgModule({
  declarations: [
    components.HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components.HeaderComponent
  ]
})
export class SharedModule { }
