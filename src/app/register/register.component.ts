import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password1: String;
  password2: String;
  register = (u, p1, p2) => {
   if (p1 === p2) {
     const newUser = {
       username: u,
       password: p1
     };
     this.userService.createUser(newUser)
       .then(res => this.router.navigate(['profile']));
   } else {
    alert('those passwords do not match');
   }
  }
  constructor(private router: Router, private userService: UserServiceClient) { }
  ngOnInit() {
  }

}
