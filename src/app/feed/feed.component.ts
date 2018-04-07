import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core'
import * as firebase from "firebase";
import { AuthenticationService } from '../authentication.service';

@NgModule({
  imports: [MatTabsModule]
})
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [AuthenticationService]
})
export class FeedComponent {
  private user;
  private userId;
  // public isAddNew;
  // public isFeed;
  // public isProfile;

  constructor(private authService: AuthenticationService) { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.userId = this.user.uid;
  }

  logout() {
    this.authService.logout();
  }

  // pressFeed() {
  //   this.isFeed = true;
  //   this.isAddNew = false;
  //   this.isProfile = false;
  // }

}
