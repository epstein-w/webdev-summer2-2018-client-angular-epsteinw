import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private router: Router, private userService: UserServiceClient) { }

  login = (username, password) => {
    this.userService.login({username: username, password: password})
      .then(u => this.router.navigate(['profile']));
  }
  ngOnInit() {
  }

}
