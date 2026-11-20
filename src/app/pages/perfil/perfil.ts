import {Component, Input, inject} from '@angular/core';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular';
import {Publi} from '../../models/publi';
import {Stories} from '../../models/stories';
import {ActivatedRoute} from '@angular/router';
import {mock_publi} from '../../data/publi-data';
import { Publicaciones } from '../../components/publicaciones/publicaciones';
import { PublicacionesService } from '../../services/publicaciones';
import { mock_story } from '../../data/stories-data';

@Component({
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, Publicaciones],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {
  @Input() stories!: Stories;
  @Input() publi!: Publi;

  publis: Publi[] = [];

  private route = inject(ActivatedRoute);

  constructor(private publicaciones: PublicacionesService) {}

  datos?: Publi;
  datos_perfil?: Stories;

  // Aquí puedes usar este ID para buscar los datos del usuario en tu servicio
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const userUrl = params.get('userName');

      if (userUrl) {
        this.datos = (mock_publi as Publi[]).find((item) => item.userName === userUrl);
        this.datos_perfil = (mock_story as Stories[]).find((item) => item.userName === userUrl);

        this.publis = this.publicaciones.publicaciones.filter((item) => item.userName === userUrl);
      }
    });
  }
}
