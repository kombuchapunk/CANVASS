import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
