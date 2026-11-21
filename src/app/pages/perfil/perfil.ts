import { Component, Input, ViewChild, inject } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPopover,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { Publi, talla, tipos } from '../../models/publi';
import { Stories } from '../../models/stories';
import { ActivatedRoute } from '@angular/router';
import { mock_publi } from '../../data/publi-data';
import { Publicaciones } from '../../components/publicaciones/publicaciones';
import { PublicacionesService } from '../../services/publicaciones';
import { mock_story } from '../../data/stories-data';
import { CommonModule } from '@angular/common'; // AÑADIDO (necesario para el @if en el HTML)
import { TemaService } from '../../services/tema';

@Component({
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonPopover,
    Publicaciones,
    CommonModule,
  ], // AÑADIDO CommonModule
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {
  @ViewChild('opcionesPopover') opcionesPopover!: IonPopover;
  readonly temaService = inject(TemaService);

  @Input() stories!: Stories;
  @Input() publi!: Publi;

  tallas = Object.values(talla);
  tiposDisponibles = Object.values(tipos);

  publis: Publi[] = [];

  private route = inject(ActivatedRoute);

  constructor(private publicaciones: PublicacionesService) {}

  datos?: Publi;
  datos_perfil?: Stories;

  // AÑADIDO: Variable para saber si es tu propio perfil
  esMiPerfil: boolean = false;

  // Aquí puedes usar este ID para buscar los datos del usuario en tu servicio
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const userUrl = params.get('userName');

      if (userUrl) {
        // ESTO YA LO TENÍAS: Perfil de otra persona
        this.datos = (mock_publi as Publi[]).find((item) => item.userName === userUrl);
        this.datos_perfil = (mock_story as Stories[]).find((item) => item.userName === userUrl);
        this.publis = this.publicaciones.publicaciones.filter((item) => item.userName === userUrl);
      } else {
        // AÑADIDO: Tu propio perfil (cuando no hay nombre en la URL)
        this.esMiPerfil = true;

        // Pon aquí el nombre que quieras que sea tu usuario por defecto
        const miUsuario = 'LauraCruz_24';

        this.datos = (mock_publi as Publi[]).find((item) => item.userName === miUsuario);
        this.datos_perfil = (mock_story as Stories[]).find((item) => item.userName === miUsuario);
        this.publis = this.publicaciones.publicaciones.filter(
          (item) => item.userName === miUsuario,
        );
      }
    });
  }

  abrirMenuPublicacion(event: MouseEvent, popover: IonPopover): void {
    void popover.present(event);
  }

}
