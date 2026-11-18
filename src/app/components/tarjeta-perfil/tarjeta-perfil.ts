import { Component, Input } from '@angular/core';
import { Stories } from '../../models/stories';

@Component({
  imports: [],
  selector: 'app-tarjeta-perfil',
  styleUrl: './tarjeta-perfil.css',
  templateUrl: './tarjeta-perfil.html',
})
export class TarjetaPerfil {
  @Input() stories!: Stories;
}
