import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll.model'
import { PollService } from '../poll.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-user-polls',
  templateUrl: './user-polls.component.html',
  styleUrls: ['./user-polls.component.css'],
  providers: [PollService, AuthenticationService]
})
export class UserPollsComponent  {
  private user;
  polls: FirebaseListObservable<any[]>;
  userId: string;

  constructor(private pollService: PollService, private authService: AuthenticationService) { }

  getUserId() {
    this.pollService.getUserId();
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  getUserPolls() {
    this.pollService.getUserPolls();
  }

  logout() {
    this.authService.logout();
  }
}
