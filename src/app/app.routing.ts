import {Routes, RouterModule} from'@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CourseComponent} from './course/course.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'course/:courseId', component: CourseComponent},
  {path: 'sections', component: SectionsComponent},
  {path: 'enroll/:courseId', component: EnrollmentComponent},
  {path: 'courses', component: CourseNavigatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
