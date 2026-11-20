import { Component } from '@angular/core';
import { Busqueda } from '../../components/busqueda/busqueda';
import { IonContent, IonHeader } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Publicaciones } from '../../components/publicaciones/publicaciones';
import { PublicacionesService } from '../../services/publicaciones';
import { Publi } from '../../models/publi';

@Component({
  imports: [Busqueda, IonContent, Publicaciones, CommonModule, IonHeader],
  selector: 'app-favoritos',
  styleUrl: './favoritos.css',
  templateUrl: './favoritos.html',
})
export class Favoritos {

  publicaciones: Publi[] = [];

  constructor(private publicacionesService: PublicacionesService) {}
  filtroActivo: string = 'Ambos';


  // Se ejecuta la primera vez que se crea el componente
  ngOnInit() {
    this.publicaciones = this.publicacionesService.publicaciones;
    this.filtrarLista();
  }

  // Se ejecuta cada vez que entras a la pestaña
  ionViewWillEnter() {
    this.publicaciones = this.publicacionesService.publicaciones;
    this.filtrarLista();
  }

  filtrarLista() {
    // Primero cogemos TODAS las que tienen like
    const conLike = this.publicacionesService.publicaciones.filter(p => p.postLiked);

    // Si el filtro es 'todos', las mostramos todas
    if (this.filtroActivo === 'Ambos') {
      this.publicaciones = conLike;
    } else {
      // Si no, filtramos por el tipo (Prestamo o Cambio)
      this.publicaciones = conLike.filter(p => p.type === this.filtroActivo);
    }
  }

  // 3. Función que se activa al pulsar un botón
  cambiarFiltro(nuevoFiltro: string) {
    this.filtroActivo = nuevoFiltro;
    this.filtrarLista(); // Volvemos a ejecutar el filtro
  }


  buscar(texto: string) {
    console.log('El usuario busca:', texto);
  }
}
