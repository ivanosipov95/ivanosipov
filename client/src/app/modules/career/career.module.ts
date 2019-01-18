import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './containers/career/career.component';
import { TreeComponent } from './particles/tree/tree.component';

@NgModule({
  declarations: [CareerComponent, TreeComponent],
  imports: [
    CommonModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
