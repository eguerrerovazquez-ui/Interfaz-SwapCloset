import { Component, inject, Input } from '@angular/core';
import { Publi } from '../../models/publi';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPopover,
  IonRange,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { mock_story } from '../../data/stories-data';
import { Stories } from '../../models/stories';
import { addIcons } from 'ionicons';
import { arrowBack, send, star } from 'ionicons/icons';

@Component({
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonIcon,
    IonPopover,
    IonRange,
  ],
  selector: 'app-chat-interno',
  styleUrl: './chat-interno.css',
  templateUrl: './chat-interno.html',
})
export class ChatInterno {
  @Input() Publi!: Publi;

  private route = inject(ActivatedRoute);

  usuario: string = 'Perfil';
  datos: string = '';
  valoracion = 3;

  actualizarValoracion(event: { detail: { value: number } }) {
    this.valoracion = event.detail.value;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.usuario = params['get']('userName')!;
      console.log('Parámetros de la URL:', params);
      const storyData = (mock_story as Stories[]).find((u) => u.userName === this.usuario);
      if (storyData) {
        this.datos = storyData.userImage;
      }
    });
  }

  constructor(){
    addIcons({ arrowBack, send, star });
  }
}
