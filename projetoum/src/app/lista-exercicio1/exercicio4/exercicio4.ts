import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: false,
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.css',
})
export class Exercicio4 {
  nome: string = '';
  formularioValido: boolean = false;

  verificarValidade(): void{
    this.formularioValido = this.nome.trim().length > 0;
  }
}
