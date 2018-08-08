import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import { ActivatedRoute } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {P} from '@angular/core/src/render3';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  courseId: number;
  currentUser: {};
  loggedIn: boolean;
  sections = [];
  constructor(private route: ActivatedRoute, private userService: UserServiceClient, private sectionService: SectionServiceClient) {
    this.courseId = parseInt(window.location.href.split('/').reverse()[0], 10);
    console.log(this.courseId);
  }

  enroll = section => {
    if (this.loggedIn) {
      this.sectionService.enroll(section._id);
    } else {
      alert('You must log in to enroll in sections');
    }
  }
  ngOnInit() {
    this.userService.currentUser()
      .then(user => {
        this.currentUser = user[0];
        console.log(user[0]);
        if (user[0]) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        console.log(this.currentUser);
      });
    this.sectionService.findSectionsForCourse(this.courseId)
      .then(sections => this.sections = sections);
  }

}
