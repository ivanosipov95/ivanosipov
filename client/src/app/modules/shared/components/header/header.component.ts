import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() onMenuOpen: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) {
    
    console.log('router', this.router);
  }


  handleMenuOpen(): void {
    this.onMenuOpen.emit();
  }
}
