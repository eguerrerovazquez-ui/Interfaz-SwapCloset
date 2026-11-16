import { Component, Input } from '@angular/core';
import { Publi } from '../../models/publi';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular';

@Component({
  imports: [IonIcon],
  standalone: true,
  selector: 'app-publicaciones',
  styleUrl: './publicaciones.css',
  templateUrl: './publicaciones.html',
})
export class Publicaciones {
  @Input() publicaciones!: Publi;

  postLiked: boolean = false;

  toggleLike() {
    this.postLiked = !this.postLiked;
  }
}
