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
  selectModule = (module) => {
    console.log('select mod ' + module.title);
    console.log(this.selectedModule);
    this.selectedModule = module;
  }
  selectLesson = lesson => {
    console.log('select lesson ' + lesson.title);
    this.selectedLesson = lesson;
  }
  constructor(route: ActivatedRoute, private courseService: CourseServiceClient) {
    this.courseId = parseInt(window.location.href.split('/').reverse()[0], 10);
  }

  ngOnInit() {
    this.courseService.findCourseById(this.courseId)
      .then(courses => this.course = courses)
      .then( () => this.selectedModule = this.course.modules[0])
      .then(() => this.selectedLesson = this.selectedModule.lessons[0]);
  }

}
