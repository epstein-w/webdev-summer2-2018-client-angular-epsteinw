import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  courses = [];
  constructor(private router: Router, private courseService: CourseServiceClient) { }

  selectCourse(course) {
    this.router.navigate(['course', course.id]);

  }
  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
