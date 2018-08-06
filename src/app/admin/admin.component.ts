import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  courses: [{
    title: String,
    id: Number,
    sections: [{}]
  }];
  selectedCourse: {
    title: String,
    id: Number,
    sections: [{}]
  };
  sections: [{}];
  sectionTitle: String;
  sectionCap: number;
  constructor(private courseService: CourseServiceClient, private sectionService: SectionServiceClient) { }

  addSection = (title, cap) => {
    console.log('section added');
    const newSection = {
      title: title,
      capacity: cap,
      courseId: this.selectedCourse.id
    };
    this.sectionService.createSectionForCourse(this.selectedCourse, newSection)
      .then(() => {
        return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
      }).then(sections => this.sections = sections);
  }
  deleteSection = section => this.sectionService.deleteSection(section)
    .then(() => {
      return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
    }).then(sections => this.sections = sections)
  editSection = section => this.sectionService.editSection(section)
    .then(() => {
      return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
    }).then(sections => this.sections = sections)
  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService.findSectionsForCourse(course.id)
      .then(ss => this.sections = ss);
  }
  ngOnInit() { this.courseService.findAllCourses()
    .then(cs => this.courses = cs)
    .then(() => {
      this.selectedCourse = this.courses[0];
    });
  }

}
