import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll.model'
import { PollService } from '../poll.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthenticationService } from '../authentication.service';
import { VoteService } from '../vote.service';
import * as firebase from "firebase";
import { sum, values } from 'lodash';

@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.scss'],
  providers: [PollService, AuthenticationService, VoteService]
})
export class MyPollsComponent implements OnInit {

  choice1count: number = 0;
  choice2count: number = 0;
  userVote: number = 0;
  pollId: string;

  private user;
  polls: FirebaseListObservable<any[]>;
  myPolls: FirebaseListObservable<any[]>;
  gradient: object;
  userId: string;
  gradientList=["#ff758c", "#50c9c3", "#ffc3a0", "#614385", "#43cea2", "#f4e2d8", "#ffd89b", "#19547b", "#c4e0e5", "#ffedbc"];

  constructor(private pollService: PollService, private authService: AuthenticationService, private voteService: VoteService) {
  }

  ngOnInit() {
    this.polls = this.pollService.getAllPolls();
    // this.userPolls = this.pollService.getUserPolls();
    this.gradient = this.randomGradient();
    this.myPolls = this.pollService.getMyPolls();
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

  voteChoice1(pollId) {
    let vote = this.userVote == 1 ? 0 : 1
    this.voteService.updateUserChoice1Vote(pollId, this.userId, vote);
    this.disableVote(pollId);
    if (this.isDisabled(pollId)) {
      console.log("TRUE")
    } else {
      console.log("FALSE")
    }
  }

  voteChoice2(pollId) {
    let vote = this.userVote == 1 ? 0 : 1
    this.voteService.updateUserChoice2Vote(pollId, this.userId, vote);
    this.disableVote(pollId);
    if (this.isDisabled(pollId)) {
      console.log("TRUE")
    } else {
      console.log("FALSE")
    }
  }

  disableVote(pollId) {
    this.voteService.disableVote(pollId, this.userId);
  }

  isDisabled(pollId) {
    let votes = this.voteService.getUsersWhoVoted(pollId);
    let isDisabled = false;
    console.log(votes);
    votes.forEach(vote => {
      if (vote.hasOwnProperty(this.userId)) {
        isDisabled = true;
      }
    })
    return isDisabled;
  }

  // getMyPolls() {
  //   let myPolls = [];
  //   this.polls.forEach(poll => {
  //     if (poll.hasOwnProperty(this.userId)) {
  //       myPolls.push(poll)
  //     }
  //   })
  //   return myPolls
  // }

  // Function to check if all polls are hidden from the user (broken)
  //
  // areAllHidden() {
  //   let counter = 0;
  //   let numberOfPolls = 0;
  //   let allHidden = false;
  //   this.polls.subscribe((polls) => {
  //     numberOfPolls++
  //     polls.forEach(poll => {
  //       let votes= this.voteService.getUsersWhoVoted(poll.$key);
  //       votes.forEach(vote => {
  //         if (vote.hasOwnProperty(this.userId)) {
  //           counter++
  //         }
  //       })
  //     })
  //   });
  //   if (counter >= numberOfPolls) {
  //     allHidden = true
  //   }
  //   console.log(allHidden)
  //   return allHidden
  // }

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
