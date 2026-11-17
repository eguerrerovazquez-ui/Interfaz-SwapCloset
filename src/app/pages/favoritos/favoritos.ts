import { Component, OnInit } from '@angular/core';
import { Busqueda } from '../../components/busqueda/busqueda';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Publicaciones } from '../../components/publicaciones/publicaciones';
import { PublicacionesService } from '../../services/publicaciones';
import { Publi } from '../../models/publi';

@Component({
  imports: [Busqueda, IonContent, Publicaciones, CommonModule, IonHeader, IonToolbar],
  selector: 'app-favoritos',
  styleUrl: './favoritos.css',
  templateUrl: './favoritos.html',
})
export class Favoritos {

  publicaciones: Publi[] = [];

  constructor(private publicacionesService: PublicacionesService) {}

  // Se ejecuta la primera vez que se crea el componente
  ngOnInit() {
    this.publicaciones = this.publicacionesService.publicaciones;
  }

  // Se ejecuta cada vez que entras a la pestaña
  ionViewWillEnter() {
    this.publicaciones = this.publicacionesService.publicaciones;
  }

  buscar(texto: string) {
    console.log('El usuario busca:', texto);
  }
}
