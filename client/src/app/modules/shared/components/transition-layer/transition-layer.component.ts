import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'transition-layer',
  templateUrl: './transition-layer.component.html',
  styleUrls: ['./transition-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionLayerComponent implements OnInit {

  isOpen = false;
  isVisible = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  open(): void {
    this.isOpen = true;
    this.isVisible = true;

    this.detectChanges();
  }

  close(): void {
    this.isOpen = false;
    this.isVisible = true;

    this.detectChanges();

    setTimeout(() => {
      this.isVisible = false;
      this.detectChanges();
    }, 1000)
  }

  private detectChanges(): void {
    this.cd.detectChanges();
  }

}
