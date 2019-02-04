import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {D3Service} from "../../../shared/services";
import {Observable, of} from "rxjs";
import {Project, projects} from "../../models";
import {debounceTime} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  projects$: Observable<Project[]>;

  constructor(private d3: D3Service, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projects$ = of(projects).pipe(debounceTime(1000));

  }

  handleDetails(id: number): void {
    this.router.navigate([id], {relativeTo: this.route})
  }

  ngAfterViewInit(): void {
    // this.d3.initTree();
  }

}
