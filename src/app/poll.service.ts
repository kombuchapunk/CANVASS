import { Injectable } from '@angular/core';
import { Poll } from './poll.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';
import { AuthenticationComponent } from './authentication/authentication.component';


@Injectable()
export class PollService {
  polls: FirebaseListObservable<any[]>;
  userId: string;
  userPolls: FirebaseListObservable<any[]>;
  providers: [AuthenticationService];

  constructor(private db: AngularFireDatabase, private authService: AuthenticationService) {
    this.polls = this.db.list('polls');
  }

  getAllPolls(): FirebaseListObservable<Poll[]> {
    return this.polls;
  }

  addPoll(newPoll: Poll) {
    this.polls.push(newPoll);
  }
  // getUserPolls(): FirebaseListObservable<Poll[]> {
  //   let userId = this.authService.userId;
  //   return this.userPolls;
  // }

}
