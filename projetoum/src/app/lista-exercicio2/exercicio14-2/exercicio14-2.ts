import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio14-2',
  standalone: false,
  templateUrl: './exercicio14-2.html',
  styleUrl: './exercicio14-2.css',
})
export class Exercicio142 {
   usuarioLogado: boolean = false;

  entrarSair(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
