import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css',
})
export class DesafioFinal {
   mostrarConcluidos: boolean = true;

  projetos = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe Alpha',
      nota: 8.5,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Finanças',
      equipe: 'Equipe Beta',
      nota: 7,
      status: 'testes',
      entregue: true
    },
    {
      id: 3,
      titulo: 'Sistema de Serviços',
      equipe: 'Equipe Gamma',
      nota: 5.5,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Projeto de Redes',
      equipe: 'Equipe Delta',
      nota: null,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 5,
      titulo: 'Aplicativo Educacional',
      equipe: 'Equipe Epsilon',
      nota: 9,
      status: 'concluído',
      entregue: true
    }
  ];

  projetosExibidos() {
    if (this.mostrarConcluidos) {
      return this.projetos;
    }

    return this.projetos.filter(projeto => projeto.status !== 'concluído');
  }

  alterarStatus(projeto: any): void {
    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';
    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';
    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';
    } else {
      projeto.status = 'planejamento';
    }
  }

  quantidadeConcluidos(): number {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }

  mostrarOuOcultarConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

}
