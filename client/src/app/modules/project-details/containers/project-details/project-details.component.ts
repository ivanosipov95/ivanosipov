import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
