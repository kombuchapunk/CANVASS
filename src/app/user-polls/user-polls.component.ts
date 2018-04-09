import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { Poll } from '../poll.model'
import { PollService } from '../poll.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthenticationService } from '../authentication.service';
import { VoteService } from '../vote.service';
import * as firebase from "firebase";
import { sum, values } from 'lodash';

@Component({
  selector: 'app-user-polls',
  templateUrl: './user-polls.component.html',
  styleUrls: ['./user-polls.component.scss'],
  providers: [PollService, AuthenticationService, VoteService]
})
export class UserPollsComponent implements OnInit, OnDestroy {

  choice1count: number = 0;
  choice2count: number = 0;
  userVote: number = 0;
  pollId: string;

  subscription;

  private user;
  polls: FirebaseListObservable<any[]>;
  userPolls: FirebaseListObservable<any[]>;
  gradient: object;
  userId: string;
  gradientList=["#ff758c", "#50c9c3", "#ffc3a0", "#614385", "#43cea2", "#f4e2d8", "#ffd89b", "#19547b", "#c4e0e5", "#ffedbc"];

  constructor(private pollService: PollService, private authService: AuthenticationService, private voteService: VoteService) {
  }

  ngOnInit() {
    this.polls = this.pollService.getAllPolls();
    // this.userPolls = this.pollService.getUserPolls();
    this.gradient = this.randomGradient();
    this.subscription = this.voteService.getChoice1Votes(this.pollId)
                      .subscribe(choice1votes  => {
                        if (firebase.auth().currentUser.uid) this.userVote = choice1votes[firebase.auth().currentUser.uid]
                        this.choice1count = sum(values(choice1votes))
                      })
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
  }

  voteChoice2(pollId) {
    let vote = this.userVote == 1 ? 0 : 1
    this.voteService.updateUserChoice2Vote(pollId, this.userId, vote);
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

  ngOnDestroy() {
    this.subscription.unsubscripe();
  }
}
