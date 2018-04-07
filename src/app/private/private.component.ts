import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core'
import * as firebase from "firebase";
import { AuthenticationService } from '../authentication.service';

@NgModule({
  imports: [MatTabsModule]
})
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [AuthenticationService]
})
export class PrivateComponent {
  private user;
  private userId;

  constructor(private authService: AuthenticationService) { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.userId = this.user.uid;
  }

  logout() {
    this.authService.logout();
  }

}
