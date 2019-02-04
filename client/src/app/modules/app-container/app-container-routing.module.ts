import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppContainerComponent} from "./containers/app-container/app-container.component";

const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/about'
      },
      {
        path: 'about',
        loadChildren: 'src/app/modules/about/about.module#AboutModule'
      },
      {
        path: 'projects',
        loadChildren: 'src/app/modules/projects/projects.module#ProjectsModule'
      },
      {
        path: 'blog',
        loadChildren: 'src/app/modules/blog/blog.module#BlogModule'
      },
      {
        path: 'admin',
        loadChildren: 'src/app/modules/admin/admin.module#AdminModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContainerRoutingModule { }
