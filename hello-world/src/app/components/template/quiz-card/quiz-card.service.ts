import { Injectable } from '@angular/core';
import { Options, Quiz } from './quiz-card.model';

@Injectable()
export class QuizCardService {
  quizzes: Quiz[] = [
    new Quiz(1, "questão 1?",new Options({text:"luca",isAnswer:false})),
    new Quiz(1, "questão 2?"),
    new Quiz(1, "questão 3?"),
    new Quiz(1, "questão 4?"),
    new Quiz(1, "questão 5?")
  ];

  constructor() {}

   listQuizzes():Quiz[]{
     return this.quizzes;
   }
}
