import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() onMenuOpen: EventEmitter<void> = new EventEmitter();

  constructor() {
  }


  handleMenuOpen(): void {
    this.onMenuOpen.emit();
  }
}
