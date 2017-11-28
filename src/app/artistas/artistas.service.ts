import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Artistas {
  constructor(public id: number, public name: string) { }
}

const ARTISTA = [
  new Artistas(1, 'Dragon Burning Cities'),
  new Artistas(2, 'Sky Rains Great White Sharks'),
  new Artistas(3, 'Giant Asteroid Heading For Earth'),
  new Artistas(4, 'Procrastinators Meeting Delayed Again'),
];

import { Injectable } from '@angular/core';

@Injectable()
export class ArtistasService {
  static nextArtistasId = 100;
  private _artistas: BehaviorSubject<Artistas[]> = new BehaviorSubject<Artistas[]>(ARTISTA);

  getArtistas() { return this._artistas; }

  getArtista(id: number | string) {
    return this.getArtistas()
      .map(crises => crises.find(Artistas => Artistas.id === +id));
  }

  addArtistas(name: string) {
    name = name.trim();
    if (name) {
      let art = new Artistas(ArtistasService.nextArtistasId++, name);
      ARTISTA.push(art);
      this._artistas.next(ARTISTA);
    }
  }
}