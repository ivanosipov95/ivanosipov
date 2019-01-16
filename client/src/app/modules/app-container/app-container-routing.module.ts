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
        path: 'career',
        loadChildren: 'src/app/modules/career/career.module#CareerModule'
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
