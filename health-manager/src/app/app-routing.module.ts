import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRoutes } from './tarefas';
const routes: Routes = [
  {
path:'', 
redirectTo:'/patients/list', 
pathMatch:'full'
  },
  ...PatientRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
