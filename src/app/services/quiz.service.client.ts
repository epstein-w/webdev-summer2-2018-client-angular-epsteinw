import {Injectable} from '@angular/core';


@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {}
  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz')
      .then(r => r.json())
  findQuizById = quizId =>
    fetch('http://localhost:3000/api/quiz/' + quizId)
      .then(r => r.json())
  deleteQuiz(quizId) {}

  submitQuiz = quiz => fetch('http://localhost:3000/api/quiz/' + quiz._id + '/submission', {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(quiz),
    headers: {
     'content-type': 'application/json'
    }
  }).then(r => r.json())
  findAllSubmissions = quizId =>  fetch('http://localhost:3000/api/quiz/' + quizId + '/submission')
    .then(response => response.json())
  findSubmissionByQuizId = (quizId, submissionId) =>  fetch('http://localhost:3000/api/quiz/' + quizId + '/submission/' + submissionId)
    .then(response => response.json())
}
