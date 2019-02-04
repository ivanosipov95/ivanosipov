import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectDetailsRoutingModule} from './project-details-routing.module';
import {ProjectDetailsComponent} from './containers/project-details/project-details.component';
import {ProjectDetailsService} from "./services/project-details.service";
import {ProjectResolver} from "./services/project.resolver";

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule
  ],
  providers: [
    ProjectDetailsService,
    ProjectResolver
  ]

})
export class ProjectDetailsModule { }
