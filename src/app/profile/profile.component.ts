import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: {};
  constructor(private UserService: UserServiceClient) { }

  ngOnInit() {
   this.UserService.currentUser()
     .then(u => this.currentUser = u);
  }

}
