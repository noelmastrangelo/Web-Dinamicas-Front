import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistasRoutingModule } from './artistas-routing.module';
import { ArtistasPrincipalComponent } from './artistas-principal/artistas-principal.component';
import { ArtistasService } from "./artistas.service";

@NgModule({
  imports: [
    CommonModule,
    ArtistasRoutingModule
  ],
  declarations: [
    ArtistasPrincipalComponent
  ],
  exports: [
    ArtistasPrincipalComponent
  ],
  providers: [
    ArtistasService
  ]
})
export class ArtistasModule { }
