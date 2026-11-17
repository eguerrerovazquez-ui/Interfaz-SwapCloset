import { Component } from '@angular/core';
import {Busqueda} from '../../components/busqueda/busqueda';
import {IonContent} from '@ionic/angular';

@Component({
  imports: [
    Busqueda,
    IonContent
  ],
  selector: 'app-favoritos',
  styleUrl: './favoritos.css',
  templateUrl: './favoritos.html',
})
export class Favoritos {
  buscar(texto: string) {
    console.log('El usuario busca:', texto);
  }
}
