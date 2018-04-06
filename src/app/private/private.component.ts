import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {
  private user;
  
  constructor() { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

}
