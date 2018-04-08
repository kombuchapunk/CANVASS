import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {
  user;
  userId;
  private isLoggedIn: boolean;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
        this.router.navigate(['login']);
      } else {
        this.isLoggedIn = true;
        this.router.navigate([]);
      }
    });
  }
  ngOnInit() {
    // this.userId = this.authService.user.$key;
  }
}
