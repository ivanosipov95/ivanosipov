import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  title = 'wasn\'t tested';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.windowLoad();
  }

  changeTitle(): void {
    this.http.get('api/test').subscribe((data: any) => this.title = data.text);
  }

  windowLoad(): void {
    this.triggerSmokeEffect();
  }

  triggerSmokeEffect(): void {
    var modalTrigger = $('.header__nav'),
      transitionLayer = $('.cd-transition-layer'),
      transitionBackground = transitionLayer.children(),
      modalWindow = $('.full-menu');

    //open modal window
    modalTrigger.on('click', function (event) {
      event.preventDefault();
      transitionLayer.addClass('visible opening');
      var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
      setTimeout(function () {
        modalWindow.addClass('visible');
      }, delay);
    });

    //close modal window
    modalWindow.on('click', '.modal-close', function (event) {
      event.preventDefault();
      transitionLayer.addClass('closing');
      modalWindow.removeClass('visible');
      transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
        transitionLayer.removeClass('closing opening visible');
        transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
      });
    });

  }

}
