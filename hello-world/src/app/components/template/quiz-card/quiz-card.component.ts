import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Option, Quiz } from './quiz-card.model';
import { QuizCardService } from './quiz-card.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  answered:boolean = false
  isCorrect:boolean = false
  questionPrgress:number
  progress:number = 0
  points:number = 0
  curr_quiz:Quiz
  quizzes:Quiz[]

  @ViewChild('quizCardForm',{static: true})
  quizCardForm:NgForm

  constructor(private quizCardService:QuizCardService) { }

  ngOnInit(): void {
  this.quizzes=this.quizCardService.listQuizzes()
  this.curr_quiz = this.quizzes[0]
  this.questionPrgress = (100/this.quizzes.length)
  console.log(this.curr_quiz)
  }

  selectAnswer(selected:Option){
    this.answered = true;
    if(selected.isAnswer === true){
      this.isCorrect = true
    }
  }

  nextQuestion(){
    this.checkAnswer()
    this.progress += this.questionPrgress
    if (this.curr_quiz.id < this.quizzes.length){
      this.curr_quiz = this.quizzes[this.curr_quiz.id]
    }else{

    }
    console.log(this.curr_quiz)
    this.reset()
  }

  checkAnswer(){
    if(this.isCorrect){
      this.points += this.questionPrgress
    }
  }

  reset(){
    this.answered = false
    this.isCorrect= false
  }

}
