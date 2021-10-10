import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views';
import { QuizCardComponent } from './components';
import { QuizComponent } from './components/quiz/quiz.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
