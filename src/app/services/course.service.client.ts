import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses () {
    return (fetch('https://obscure-mountain-36147.herokuapp.com/api/course')
      .then(response => response.json()));
  }
  findCourseById = courseId => {
    return (fetch('https://obscure-mountain-36147.herokuapp.com/api/course/' + courseId)
      .then(response => response.json()));
  }
}
