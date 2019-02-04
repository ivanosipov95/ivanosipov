import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectDetailsComponent} from "./containers/project-details/project-details.component";
import {ProjectResolver} from "./services/project.resolver";

const routes: Routes = [
  {
    path:  '',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailsRoutingModule { }
