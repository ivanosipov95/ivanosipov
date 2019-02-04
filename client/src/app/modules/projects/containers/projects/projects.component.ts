import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {D3Service} from "../../../shared/services";
import {Observable, of} from "rxjs";
import {Project} from "../../models";
import {debounce, debounceTime} from "rxjs/operators";
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
    const projects: Project[] = [
      {
        id: 1,
        companyName: 'Sidenis',
        projectName: 'testName',
        startDate: 12,
        endDate: 14,
        roles: 'Frontend Developer',
        imageSrc: 'assets/sidenis.svg'
      },
      {
        id: 2,
        companyName: 'EPAM Systems',
        projectName: 'testName',
        startDate: 12,
        endDate: 14,
        roles: 'Frontend Developer',
        imageSrc: 'assets/epam.svg'
      },
      {
        id: 3,
        companyName: 'Polytech',
        projectName: 'Computer Science',
        startDate: 12,
        endDate: 14,
        roles: 'Student',
        imageSrc: 'assets/polytech.svg'
      }
    ];

    this.projects$ = of(projects).pipe(debounceTime(1000));

  }

  handleDetails(id: number): void {
    this.router.navigate([id], {relativeTo: this.route})
  }

  ngAfterViewInit(): void {
    // this.d3.initTree();
  }

}
