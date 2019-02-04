import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './containers/project-details/project-details.component';

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule
  ]
})
export class ProjectDetailsModule { }
