import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {


  quizId = '';
  quiz = {};
  submission = [{}];
  constructor(private service: QuizServiceClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.service.findQuizById(this.quizId)
        .then(q => this.quiz = q);
      this.service.findSubmissionByQuizId(params['quizId'], params['submissionId'])
        .then(s => {
          this.submission = s;
          console.log(s);
        });
    });
  }

}
