import { Injectable } from '@angular/core';
import { Poll } from './poll.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Router } from '@angular/router';


@Injectable()
export class PollService {
  polls: FirebaseListObservable<any[]>;
  userId: string;
  userPolls: FirebaseListObservable<any[]>;
  providers: [AuthenticationService];

  constructor(private db: AngularFireDatabase, private authService: AuthenticationService, private router: Router) {
    this.polls = this.db.list('polls');
  }

  getAllPolls(): FirebaseListObservable<Poll[]> {
    return this.polls;
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
