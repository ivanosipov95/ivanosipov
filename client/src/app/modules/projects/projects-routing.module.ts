import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from "./containers/projects/projects.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path:':id',
    loadChildren: 'src/app/modules/project-details/project-details.module#ProjectDetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
