import { Component, inject, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publi } from '../../models/publi';
import { PublicacionesService } from '../../services/publicaciones';
import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonPopover, IonToolbar } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonPopover,
    IonDatetime,
    CommonModule,
    IonButton,
  ],
  selector: 'app-perfil-publicacion',
  styleUrl: './perfil-publicacion.css',
  templateUrl: './perfil-publicacion.html',
})
export class PerfilPublicacion {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private publicacionesService = inject(PublicacionesService);

  fechaInicio?: string;
  fechaFin?: string;

  publicacionEncontrada?: Publi; // Aquí guardarás la publicación

  private calendario = viewChild<IonPopover>('calendario');

  abrirCalendario() {
    const popover = this.calendario();
    if (popover) {
      popover.present();
    }
  }

  irAlChat() {
    if (this.publicacionEncontrada) {
      this.router.navigate(['/chat-interno', this.publicacionEncontrada.userName]);
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idUrl = params['get']('id');

      if (idUrl) {
        // Usa el .find() para buscar la publicación por su ID en el servicio
        this.publicacionEncontrada = this.publicacionesService.publicaciones.find(
          (pub) => pub.id === Number(idUrl),
        );
      }
    });
  }

  constructor() {
    addIcons({ arrowBack });
  }
}
