import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
