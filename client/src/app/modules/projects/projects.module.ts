import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './containers/projects/projects.component';
import { TreeComponent } from './particles/tree/tree.component';
import { CardComponent } from './particles/card/card.component';

@NgModule({
  declarations: [ProjectsComponent, TreeComponent, CardComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
