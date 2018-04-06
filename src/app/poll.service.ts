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

  constructor(private db: AngularFireDatabase, private authService: AuthenticationService) {
    this.userId = this.authService.currentUserId();
  }

  getUserPolls(): FirebaseListObservable<Poll[]> {
    return this.db.list(`polls`);
  }
}
