import {Injectable} from "@angular/core";
import {detailedProjects, Project} from "../../projects/models";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Injectable()
export class ProjectDetailsService {

  constructor(private http: HttpClient) {
  }

  fetchById(id: number): Observable<Project> {
    // return this.http.get('')
    return of(detailedProjects.find(p => p.id === +id)).pipe(debounceTime(1000));
  }
}
