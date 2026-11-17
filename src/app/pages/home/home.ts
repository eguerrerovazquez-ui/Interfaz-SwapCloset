import { Component } from '@angular/core';
import {IonBadge, IonButtons, IonContent, IonHeader, IonIcon, IonTabButton, IonTitle, IonToolbar} from '@ionic/angular';
import { mock_story } from '../../data/stories-data';
import { Stories } from '../../models/stories';
import { Story } from '../../components/story/story';
import { Publicaciones } from '../../components/publicaciones/publicaciones';
import { mock_publi } from '../../data/publi-data';
import { Publi } from '../../models/publi';
import { PublicacionesService } from '../../services/publicaciones';

@Component({
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, IonContent, Story, Publicaciones, IonButtons],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  tieneNotificaciones: boolean = true;

  story: Stories[] = mock_story;
  // 2. En lugar de usar mock_publi, usamos la lista del servicio
  publi: Publi[] = [];

  // 3. Inyectamos el servicio
  constructor(private publicacionesService: PublicacionesService) {
    // 4. Asignamos la lista del servicio a nuestra variable
    this.publi = this.publicacionesService.publicaciones;
  }
}
