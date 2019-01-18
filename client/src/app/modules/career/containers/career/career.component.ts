import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    d3.select('.career').style('color', 'red');
  }

}
