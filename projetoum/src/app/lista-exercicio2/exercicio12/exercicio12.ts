import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.css',
})
export class Exercicio12 {
  nome = '';
  quantidade = 0;

  mensagem = '';

  produtos = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 10 },
    { id: 3, nome: 'Monitor', quantidade: 0 }
  ];

  cadastrar() {

    if (this.nome == '' || this.quantidade < 0) {
      this.mensagem = 'Não foi possível realizar o cadastro.';
      return;
    }

    this.produtos.push({
      id: this.produtos.length + 1,
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluir(produto: any) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
  }
}
