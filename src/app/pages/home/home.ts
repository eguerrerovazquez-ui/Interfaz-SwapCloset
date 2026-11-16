import { Component } from '@angular/core';
import {IonBadge, IonContent, IonHeader, IonIcon, IonTabButton, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonTabButton,
    IonIcon,
    IonBadge
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  tieneNotificaciones: boolean = true;
}
