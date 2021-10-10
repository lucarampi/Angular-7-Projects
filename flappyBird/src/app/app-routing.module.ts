import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from './tarefas';
const routes: Routes = [
  {
path:'', // if i am at 127.0.0.1:8000/
redirectTo:'/tasks/list', //sendme to 127.0.0.1:8000/tasks/list
pathMatch:'full' //send full url
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
