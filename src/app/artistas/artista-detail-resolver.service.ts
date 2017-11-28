import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { Artistas, ArtistasService }  from './artistas.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Artistas> {
  constructor(private cs: ArtistasService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Artistas> {
    let id = route.paramMap.get('id');

    return this.cs.getArtista(id).take(1).map(Artistas => {
      if (Artistas) {
        return Artistas;
      } else { // id not found
        this.router.navigate(['/artistas-center']);
        return null;
      }
    });
  }
}