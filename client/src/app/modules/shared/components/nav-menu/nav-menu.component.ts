import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent {

  @Output() closeMenu: EventEmitter<string | undefined> = new EventEmitter();

  constructor() {
  }

  handleMenuClose({target}: {target: HTMLElement}): void {
    this.closeMenu.emit(target.dataset['link']);
  }

}
