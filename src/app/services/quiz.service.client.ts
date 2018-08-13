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
}
