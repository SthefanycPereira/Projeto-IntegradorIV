import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.css',
})
export class Exercicio10 {
   produtos = [
    { id: 1, nome: 'Teclado', preco: 80, quantidade: 5, promocao: true },
    { id: 2, nome: 'Mouse', preco: 50, quantidade: 10, promocao: false },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 0, promocao: true },
    { id: 4, nome: 'Fone de ouvido', preco: 120, quantidade: 3, promocao: false },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 8, promocao: true }
  ];
}
