import { Component } from '@angular/core';
import {IonBadge, IonContent, IonHeader, IonIcon, IonTabButton, IonTitle, IonToolbar} from '@ionic/angular';
import { mock_story } from '../../data/stories-data';
import { Stories } from '../../models/stories';
import { Story } from '../../components/story/story';
import { Publicaciones } from '../../components/publicaciones/publicaciones';
import { mock_publi } from '../../data/publi-data';
import { Publi } from '../../models/publi';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonTabButton,
    IonIcon,
    IonBadge,
    IonContent,
    Story,
    Publicaciones,
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  tieneNotificaciones: boolean = true;

  story: Stories[] = mock_story;
  publi: Publi[] = mock_publi;
}
