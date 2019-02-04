import {Injectable} from "@angular/core";
import {Project} from "../../projects/models";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProjectDetailsService} from "./project-details.service";

@Injectable()
export class ProjectResolver implements Resolve<Observable<Project>> {

  constructor(private projectDetails: ProjectDetailsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
    return this.projectDetails.fetchById(route.params.id);
  }
}
