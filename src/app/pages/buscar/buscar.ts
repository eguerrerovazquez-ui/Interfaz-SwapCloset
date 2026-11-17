import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Busqueda } from '../../components/busqueda/busqueda'; // Ajusta tu ruta

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, Busqueda],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css',
})
export class Buscar {
  buscar(texto: string) {
    console.log('Buscando:', texto);
  }
}
