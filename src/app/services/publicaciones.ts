import { Injectable } from '@angular/core';
import { Publi } from '../models/publi'; // Asegúrate de que esta ruta sea correcta
import { mock_publi } from '../data/publi-data'; // Asegúrate de que esta ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  // 1. Aquí guardamos la lista maestra que viene de tu archivo de datos
  publicaciones: Publi[] = mock_publi;

  constructor() {}

  // 2. Función para cambiar el estado del like
  toggleLike(id: number) {
    // Buscamos la publicación por su ID
    const publicacion = this.publicaciones.find((p) => p.id === id);

    // Si la encuentra, le damos la vuelta al valor (si era true, pasa a false y viceversa)
    if (publicacion) {
      publicacion.postLiked = !publicacion.postLiked;
    }
  }
}
