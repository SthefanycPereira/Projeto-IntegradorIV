import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.css',
})
export class Exercicio9 {  
  produtos = [
    { id: 1, nome: 'Teclado', preco: 80, quantidade: 5 },
    { id: 2, nome: 'Mouse', preco: 50, quantidade: 10 },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 0 },
    { id: 4, nome: 'Fone de ouvido', preco: 120, quantidade: 3 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 8 }
  ];}
