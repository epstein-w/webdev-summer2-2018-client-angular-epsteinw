import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quizId = '';
  quiz = {};
  constructor(private router: Router, private service: QuizServiceClient, private activatedRoute: ActivatedRoute) { }

  submitQuiz = quiz => this.service.submitQuiz(quiz)
    .then(r => this.router.navigate(['quiz', r.quiz._id, 'submission', r._id]))

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.service.findQuizById(params['quizId'])
        .then(q => this.quiz = q);
    });
  }

}
