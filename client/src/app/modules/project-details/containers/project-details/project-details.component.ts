import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../../projects/models";

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(private route: ActivatedRoute) {
    this.project = this.route.snapshot.data['project'];
  }

  ngOnInit() {

  }

}
