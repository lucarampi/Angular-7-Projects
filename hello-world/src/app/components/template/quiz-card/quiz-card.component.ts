import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Option, Quiz } from './quiz-card.model';
import { QuizCardService } from './quiz-card.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  answered: boolean = false
  isCorrect: boolean = false
  questionPrgress: number
  progress: number
  points: number
  curr_quiz: Quiz
  quizzes: Quiz[]

  @ViewChild('quizCardForm', { static: true })
  quizCardForm: NgForm

  constructor(private quizCardService: QuizCardService, private router: Router) { }

  ngOnInit(): void {
    this.quizzes = this.quizCardService.listQuizzes()
    this.curr_quiz = this.quizzes[0]
    this.questionPrgress = (100 / this.quizzes.length)
    console.log(this.curr_quiz)
    this.progress = 0
    this.points = 0
  }

  selectAnswer(selected: Option) {
    this.answered = true;
    if (selected.isAnswer === true) {
      this.isCorrect = true
    }
  }

  nextQuestion() {
    this.checkAnswer()
    this.progress += this.questionPrgress
    if (this.curr_quiz.id < this.quizzes.length) {
      this.curr_quiz = this.quizzes[this.curr_quiz.id]
    }
    // console.log(this.curr_quiz)
    this.saveResult()
    this.reset()
  }

  saveResult(): void {
    if (this.progress >= 100) {
      this.quizCardService.saveQuizResult(this.points)
    }
  }

  checkAnswer() {
    if (this.isCorrect) {
      this.points += this.questionPrgress
    }
  }

  reset() {
    this.answered = false
    this.isCorrect = false
  }
  goToHistoric() {
    this.router.navigate(['/hist'])
  }

}
