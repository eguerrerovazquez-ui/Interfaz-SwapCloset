import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private readonly document = inject(DOCUMENT);
  private inicializado = false;
  modoOscuro = false;

  constructor() {
    this.inicializar();
  }

  inicializar(): void {
    if (this.inicializado) {
      return;
    }

    this.inicializado = true;

    try {
      this.modoOscuro = this.document.defaultView?.localStorage.getItem('swapcloset-modo-oscuro') === 'true';
    } catch {
      this.modoOscuro = false;
    }

    this.aplicarTema();
  }

  establecerModoOscuro(activado: boolean): void {
    this.modoOscuro = activado;
    this.aplicarTema();

    try {
      this.document.defaultView?.localStorage.setItem('swapcloset-modo-oscuro', String(activado));
    } catch {
      // El tema sigue funcionando aunque el almacenamiento no esté disponible.
    }
  }

  private aplicarTema(): void {
    this.document.documentElement.classList.toggle('modo-oscuro', this.modoOscuro);
  }
}
