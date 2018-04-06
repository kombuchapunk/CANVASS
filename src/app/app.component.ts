import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {
  userId;

  constructor(public authService: AuthenticationService) {
    // this.authService.user.subscribe(user =>  {
    // });
  }
  ngOnInit() {
    // this.userId = this.authService.user.$key;
  }
}
