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
  styleUrls: ['./user-polls.component.scss'],
  providers: [PollService, AuthenticationService]
})
export class UserPollsComponent implements OnInit {
  private user;
  polls: FirebaseListObservable<any[]>;
  userPolls: FirebaseListObservable<any[]>;
  gradient: object;
  userId: string;
  gradientList=["#ff758c", "#50c9c3", "#ffc3a0", "#614385", "#43cea2", "#f4e2d8", "#ffd89b", "#19547b", "#c4e0e5", "#ffedbc"];

  constructor(private pollService: PollService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.polls = this.pollService.getAllPolls();
    // this.userPolls = this.pollService.getUserPolls();
    this.gradient = this.randomGradient();
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.userId = this.user.uid;
  }

  getGradient() {
    return this.gradient;
  }

  randomGradient() {
    let style = 'linear-gradient(' + this.gradientList[Math.floor(Math.random() * 10)] + ',' + this.gradientList[Math.floor(Math.random() * 10)] + ')';
    return {
      "background" : style
    }
  }

  randomizeGradient() {
    this.gradient = this.randomGradient();
  }

  // getUserPolls() {
  //   this.p;
  //  }

  logout() {
    this.authService.logout();
  }
}
