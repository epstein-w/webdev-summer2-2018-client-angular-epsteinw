import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import { SectionsComponent } from './sections/sections.component';
import {SectionServiceClient} from './services/section.service.client';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { QuizSubmissionComponent } from './quiz-submission/quiz-submission.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import { TrueFalseAnswerComponent } from './true-false-answer/true-false-answer.component';
import { FillBlanksAnswerComponent } from './fill-blanks-answer/fill-blanks-answer.component';
import { MultipleChoiceAnswerComponent } from './multiple-choice-answer/multiple-choice-answer.component';
import { EssayAnswerComponent } from './essay-answer/essay-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionsComponent,
    EnrollmentComponent,
    HomePageComponent,
    CourseComponent,
    AdminComponent,
    QuizListComponent,
    QuizTakerComponent,
    TrueFalseQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    QuizSubmissionComponent,
    QuizAnswersComponent,
    TrueFalseAnswerComponent,
    FillBlanksAnswerComponent,
    MultipleChoiceAnswerComponent,
    EssayAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
