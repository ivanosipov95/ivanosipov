import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {D3Service} from "../../../shared/services";

@Component({
  selector: 'career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent implements OnInit, AfterViewInit {

  constructor(private d3: D3Service) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.d3.initTree();
  }

}
