import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

import {NavMenuComponent, TransitionLayerComponent} from "../../../shared/components";

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  title = 'wasn\'t tested';

  @ViewChild(NavMenuComponent)
  private navMenu: NavMenuComponent;

  @ViewChild(TransitionLayerComponent)
  private transitionLayer: TransitionLayerComponent;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  changeTitle(): void {
    this.http.get('api/test').subscribe((data: any) => this.title = data.text);
  }

  handleMenuOpen(): void {
    this.transitionLayer.open();
    this.navMenu.open();
  }

  handleMenuClose(link: string): void {
    this.transitionLayer.close();

    if (link) this.router.navigate([link]);
  }

}
