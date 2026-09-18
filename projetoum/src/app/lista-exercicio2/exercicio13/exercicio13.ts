import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.css',
})
export class Exercicio13 {tarefas = [
    {
      id: 1,
      titulo: 'Fazer relatório',
      responsavel: 'Ana',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Organizar documentos',
      responsavel: 'Carlos',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Reunião com a equipe',
      responsavel: 'Mariana',
      prioridade: 'média',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Atualizar sistema',
      responsavel: 'João',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Responder e-mails',
      responsavel: 'Beatriz',
      prioridade: 'baixa',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Preparar apresentação',
      responsavel: 'Lucas',
      prioridade: 'média',
      concluida: false
    }
  ];

 alterarSituacao(tarefa: any) {
  tarefa.concluida = !tarefa.concluida;
}
  tarefasConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }

  tarefasPendentes() {
    return this.tarefas.filter(tarefa => !tarefa.concluida).length;
  }

}
