import { Component, Input } from '@angular/core';
import { Stories } from '../../models/stories';
import {RouterLink} from '@angular/router';
import {Publi} from '../../models/publi';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-tarjeta-perfil',
  styleUrl: './tarjeta-perfil.css',
  templateUrl: './tarjeta-perfil.html',
})
export class TarjetaPerfil {
  @Input() stories!: Stories;
}
