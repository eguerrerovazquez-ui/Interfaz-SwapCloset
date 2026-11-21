import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Publi } from '../../models/publi';
import { CommonModule } from '@angular/common';
import { IonIcon, NavController } from '@ionic/angular';
import { PublicacionesService } from '../../services/publicaciones';
import { RouterLink } from '@angular/router';

@Component({
  imports: [IonIcon, RouterLink],
  standalone: true,
  selector: 'app-publicaciones',
  styleUrl: './publicaciones.css',
  templateUrl: './publicaciones.html',
})
export class Publicaciones {
  @Input() publicaciones!: Publi;

  constructor(
    private publicacionesService: PublicacionesService,
    private cdr: ChangeDetectorRef, // 2. Lo inyectamos
  ) {}


  toggleLike() {
    // 3. El servicio cambia el dato
    this.publicacionesService.toggleLike(this.publicaciones.id);

    // 4. ¡Le decimos a Angular que revise el HTML AHORA MISMO!
    this.cdr.detectChanges();
  }
}
