import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {

  login = true;
  userId: string;

  constructor(public authService: AuthenticationService, private afAuth: AngularFireAuth) {
    // this.authService.user.subscribe(user => {
    //   if(user) this.userId = user.uid
    // })
  }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  getUserId() {
    this.authService.currentUserId();
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

}
