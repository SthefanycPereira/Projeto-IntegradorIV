import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaExercicio1Module } from './lista-exercicio1/lista-exercicio1-module';

const routes: Routes = [

{
  path: 'livros',
  loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
},
{
  path: 'aluno',
  loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
},
{
  path: 'lista-exercicio1',
  loadChildren: () => import('./lista-exercicio1/lista-exercicio1-module').then(m => m.ListaExercicio1Module)
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
