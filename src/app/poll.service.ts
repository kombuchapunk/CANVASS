import { Injectable } from '@angular/core';
import { Poll } from './poll.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Router } from '@angular/router';


@Injectable()
export class PollService {
  polls: FirebaseListObservable<Poll[]>;
  myPolls: FirebaseListObservable<Poll[]>;
  userId: string;
  userPolls: FirebaseListObservable<any[]>;
  providers: [AuthenticationService];

  constructor(private db: AngularFireDatabase, private authService: AuthenticationService, private router: Router, private afAuth: AngularFireAuth) {
    this.polls = this.db.list('polls');
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  getAllPolls(): FirebaseListObservable<Poll[]> {
    return this.polls;
  }

  // getMyPolls(): FirebaseListObservable<Poll[]> {
  //   if (!this.userId) return;
  //   this.myPolls = this.db.list(`polls/`);
  //   return this.myPolls;
  // }

  getMyPolls(): FirebaseListObservable<Poll[]> {
    this.myPolls = this.db.list('/polls', {
      query: {
        orderByChild: 'userId',
        equalTo: this.userId
      }
    });
    return this.myPolls;
  }

  addPoll(newPoll: Poll) {
    this.polls.push(newPoll);
    this.router.navigate(['feed']);
  }

  // getUserPolls(): FirebaseListObservable<Poll[]> {
  //   let userId = this.authService.userId;
  //   return this.userPolls;
  // }

}
