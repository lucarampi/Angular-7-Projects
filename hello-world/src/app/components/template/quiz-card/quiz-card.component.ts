import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quiz } from './quiz-card.model';
import { QuizCardService } from './quiz-card.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {

  curr_quiz:Quiz
  quizzes:Quiz[]

  @ViewChild('quizCardForm',{static: true})
  quizCardForm:NgForm

  constructor(private quizCardService:QuizCardService) { }

  ngOnInit(): void {
  console.log(this.quizCardService.listQuizzes())
  }

}
