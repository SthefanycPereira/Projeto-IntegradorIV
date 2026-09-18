import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  templateUrl: './exercicio14.html',
  styleUrl: './exercicio14.css',
})
export class Exercicio14 { mensagemVisivel: boolean = false;

  mostrarOcultarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }}
