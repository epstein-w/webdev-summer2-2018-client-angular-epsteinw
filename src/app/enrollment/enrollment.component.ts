import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import { ActivatedRoute } from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  /*
  if not logged in, will show nothing, if logged in, will show their username and will show the sections they are in
   */
  courseId: number;
  currentUser: {};
  sections = [];
  constructor(private route: ActivatedRoute, private userService: UserServiceClient, private sectionService: SectionServiceClient) {
    this.courseId = parseInt(window.location.href.split('/').reverse()[0], 10);
  }

  enroll = sectionId =>
    this.sectionService.enroll(sectionId)
  ngOnInit() {
    this.userService.currentUser()
      .then(user => this.currentUser = user);
    this.sectionService.findSectionsForCourse(this.courseId)
      .then(sections => this.sections = sections);
  }

}
