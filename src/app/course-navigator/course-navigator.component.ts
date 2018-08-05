import { Component, OnInit } from '@angular/core';
import {WhiteBoardComponent} from '../white-board/white-board.component';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  constructor(private courseService: CourseServiceClient) { }

  selectCourse(course) {
    console.log('course ' + course.title);
    this.selectedCourse = course;
    this.selectedModule = {};
    this.selectedLesson = {};
  }
  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = {};
  }
  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }


}
