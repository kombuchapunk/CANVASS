import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Routes, Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private user;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user != null) {
        this.router.navigate(['feed']);
      }     
    });
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
