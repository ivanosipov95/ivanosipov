import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wasn\'t tested';

  constructor(private http: HttpClient) {
  }

  changeTitle(): void {
    this.http.get('api/test').subscribe((data: any) => this.title = data.text);
  }
}
