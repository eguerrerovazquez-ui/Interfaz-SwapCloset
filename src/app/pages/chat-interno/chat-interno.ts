import { Component, inject, Input } from '@angular/core';
import { Publi } from '../../models/publi';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { mock_story } from '../../data/stories-data';
import { Stories } from '../../models/stories';
import { addIcons } from 'ionicons';
import {send} from 'ionicons/icons'

@Component({
  imports: [
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonIcon,
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
    addIcons({send})
  }
}
