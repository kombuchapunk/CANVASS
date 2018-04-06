import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
