import { Component } from '@angular/core';
import {IonContent, IonHeader} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Busqueda } from '../../components/busqueda/busqueda';
import { TarjetaPerfil } from '../../components/tarjeta-perfil/tarjeta-perfil';
import { Stories } from '../../models/stories';
import { mock_story } from '../../data/stories-data';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [IonContent, CommonModule, Busqueda, TarjetaPerfil, IonHeader],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css',
})
export class Buscar {
  usuariosFiltrados:Stories[] = [];

  todosLosUsuarios:Stories[] = mock_story;

  buscar(texto: string) {
    if (!texto || texto.trim() === '') {
      this.usuariosFiltrados = [];
      return;
    }
    const busqueda = texto.toLowerCase();
    this.usuariosFiltrados = this.todosLosUsuarios.filter(usuario =>
    usuario.userName.toLowerCase().includes(busqueda));
  }
}
