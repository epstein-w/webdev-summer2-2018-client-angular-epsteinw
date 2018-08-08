import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: {
    username: String,
    firstName: String,
    lastName: String
  };
  firstName: String;
  lastName: String;
  constructor(private router: Router, private UserService: UserServiceClient) { }
  update(user) {
    this.UserService.updateUser({
      username: user.username,
      password: user.password,
      firstName: this.firstName,
      lastName: this.lastName,
      sections: user.sections
    })
      .then(u => this.user = u);
  }
  delete(user) {
    this.UserService.deleteUser(user)
      .then(() => this.user = null);
  }
  logout () {
    this.UserService.logout();
  }
  selectSection(section) {
    this.router.navigate(['course', section.courseId]);
  }
  ngOnInit() {
   this.UserService.currentUser()
     .then(u => this.user = u)
       .then(() => {
         this.firstName = this.user.firstName;
         this.lastName = this.user.lastName;
         console.log(this.user);
         if (!this.firstName) {
           this.firstName = '';
         }
         if (!this.lastName) {
           this.lastName = '';
         }

       });
  }

}
