import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Project} from "../../models";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() project: Project;
  @Output() onDetails: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleDetails(): void {
    this.onDetails.emit(this.project.id);
  }

}
