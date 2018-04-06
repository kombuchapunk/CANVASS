import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  userId: string;
  authState: any = null;

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) {
      this.user = afAuth.authState;
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
      });
      this.user.subscribe(user => {
        if(user) this.userId = user.uid
      })
  }

  // get currentUserId() {
  //   return this.authState.uid;
  // }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginEmail(email, password) {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password)
        // [END authwithemail]
      }
  }

  signUp(email, password) {
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
