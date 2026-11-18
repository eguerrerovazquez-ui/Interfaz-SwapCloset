import {Component, Output, EventEmitter} from '@angular/core';
import {IonSearchbar} from '@ionic/angular';

@Component({
  imports: [
    IonSearchbar
  ],
  standalone: true,
  selector: 'app-busqueda',
  styleUrl: './busqueda.css',
  templateUrl: './busqueda.html',
})
export class Busqueda {
  @Output() search = new EventEmitter<string>();

  onSearch(event: any) {
    const query = event.target.value;
    this.search.emit(query);
  }
}
