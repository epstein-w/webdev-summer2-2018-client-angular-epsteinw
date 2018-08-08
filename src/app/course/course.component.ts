import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseId: number;
  course: {
    modules: [{
      lessons: [
        {
          widgets: [{}]
        }]
    }]
  };
  selectedModule: {
    lessons: [{}]
  };
  selectedLesson: {
  };
  widgets: [{
    title: String;
  }];
  selectModule = (module) => {
    this.selectedModule = module;
    this.selectedLesson = module.lessons[0];
    this.widgets = module.lessons[0].widgets;
  }
  selectLesson = lesson => {
    this.selectedLesson = lesson;
    this.widgets = lesson.widgets;
  }
  constructor(route: ActivatedRoute, private courseService: CourseServiceClient) {
    this.courseId = parseInt(window.location.href.split('/').reverse()[0], 10);
  }
  ngOnInit() {
    this.courseService.findCourseById(this.courseId)
      .then(courses => this.course = courses)
      .then( () => this.selectedModule = this.course.modules[0])
      .then(() => this.selectedLesson = this.course.modules[0].lessons[0]);
      // .then( () => this.widgets = this.course.modules[0].lessons[0].widgets);
  }

}
