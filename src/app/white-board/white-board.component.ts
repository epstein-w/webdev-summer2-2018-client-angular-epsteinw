import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  courses = [];
  selectedCourse = {};
  constructor(private courseService: CourseServiceClient) { }

  selectCourse(course) {
   console.log('course ' + course.title);
   this.selectedCourse = course;
  }
  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
