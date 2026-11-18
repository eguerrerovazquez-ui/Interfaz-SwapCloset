import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { TarjetaPerfil } from '../../components/tarjeta-perfil/tarjeta-perfil';
import { mock_story } from '../../data/stories-data';
import { Stories } from '../../models/stories';

@Component({
  imports: [IonContent, TarjetaPerfil],
  selector: 'app-mensajes',
  styleUrl: './mensajes.css',
  templateUrl: './mensajes.html',
})
export class Mensajes {
  msg:Stories[] = mock_story
}
