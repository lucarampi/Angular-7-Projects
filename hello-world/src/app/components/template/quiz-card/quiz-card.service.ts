import { Injectable } from '@angular/core';
import { Option, Quiz } from './quiz-card.model';

@Injectable()
export class QuizCardService {
  quizzes: Quiz[] = [
    new Quiz(1, "questão 1?", [ new Option("Alternativa Errada 1", false),new Option(  "Alternativa Errada 2", false),new Option(  "Alternativa Correta 3", true),new Option(  "Alternativa Errada 4", false) ,new Option(  "Alternativa Errada 5", false)]),
    new Quiz(2, "questão 2?", [ new Option("Alternativa Errada 1", false),new Option(  "Alternativa Errada 2", false),new Option(  "Alternativa Correta 3", true),new Option(  "Alternativa Errada 4", false) ,new Option(  "Alternativa Errada 5", false)]),
    new Quiz(3, "questão 3?", [ new Option("Alternativa Errada 1", false),new Option(  "Alternativa Errada 2", false),new Option(  "Alternativa Correta 3", true),new Option(  "Alternativa Errada 4", false) ,new Option(  "Alternativa Errada 5", false)]),
    new Quiz(4, "questão 4?", [ new Option("Alternativa Errada 1", false),new Option(  "Alternativa Errada 2", false),new Option(  "Alternativa Correta 3", true),new Option(  "Alternativa Errada 4", false) ,new Option(  "Alternativa Errada 5", false)]),
    new Quiz(5, "questão 5?", [ new Option("Alternativa Errada 1", false),new Option(  "Alternativa Errada 2", false),new Option(  "Alternativa Correta 3", true),new Option(  "Alternativa Errada 4", false) ,new Option(  "Alternativa Errada 5", false)])
  ];

  constructor() { }

  listQuizzes(): Quiz[] {
    return this.quizzes;
  }
}
