import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserPollsComponent } from './user-polls/user-polls.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { routing } from './app.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddPollComponent } from './add-poll/add-poll.component';
import { AuthenticationService } from './authentication.service';
import { TopbarComponent } from './topbar/topbar.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserPollsComponent,
    LoginComponent,
    FeedComponent,
    AddPollComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
