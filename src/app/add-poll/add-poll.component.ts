import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss']
})
export class AddPollComponent implements OnInit {
  private user;
  private userId;
  constructor() { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.userId = this.user.uid;
  }

  ngOnInit() {
  }

}
