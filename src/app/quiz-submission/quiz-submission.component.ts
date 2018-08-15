import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-submission',
  templateUrl: './quiz-submission.component.html',
  styleUrls: ['./quiz-submission.component.css']
})
export class QuizSubmissionComponent implements OnInit {

  quizId = '';
  quiz = {};
  submissions = [{}];
  constructor(private service: QuizServiceClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.service.findQuizById(params['quizId'])
        .then(quiz => {
          this.quiz = quiz;
          this.service.findAllSubmissions(this.quizId)
            .then(subs => this.submissions = subs);
        });
    });
  }
}
