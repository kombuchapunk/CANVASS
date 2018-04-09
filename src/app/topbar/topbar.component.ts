import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core'
import * as firebase from "firebase";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  providers: [AuthenticationService]
})
@NgModule({
  imports: [MatTabsModule]
})

export class TopbarComponent {
  private user;
  private userId;
  private userEmail;
  // public isAddNew;
  // public isFeed;
  // public isProfile;

  constructor(private authService: AuthenticationService) { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.userId = this.user.uid;
    this.userEmail = this.user.email;
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
