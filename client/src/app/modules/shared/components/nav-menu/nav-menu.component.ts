import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {

  @Output() onMenuClose: EventEmitter<string | undefined> = new EventEmitter();

  isOpen = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  open(): void {
    this.toggle();
  }

  close(): void {
    this.toggle();
  }

  handleMenuClose({target}: {target: HTMLElement}): void {
    this.close();
    this.onMenuClose.emit(target.dataset['link']);
  }

  private toggle(): void {
    this.isOpen = !this.isOpen;
    this.cd.detectChanges();
  }
}
