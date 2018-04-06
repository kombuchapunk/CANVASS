import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { PollService } from '../poll.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService, PollService]
})
export class AuthenticationComponent implements OnInit {

  login = true;
  userId: string;
  polls: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, public authService: AuthenticationService, private afAuth: AngularFireAuth, public pollService: PollService) {
    this.polls = db.list('polls')
  }

  ngOnInit() {

  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginEmail(email, password) {
    this.authService.loginEmail(email, password);
  }

  signUp(email, password) {
    this.authService.signUp(email, password);
    this.login = true;
  }

  logout() {
    this.authService.logout();
  }

  motherfuckerIn() {
    this.login = true;
  }

  motherfuckerOut() {
    this.login = null;
  }

  getUserPolls() {
    this.pollService.getUserPolls();
  }
}
