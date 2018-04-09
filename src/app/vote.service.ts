import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class VoteService {

  constructor(private db: AngularFireDatabase) { }

  getChoice1Votes(itemId): FirebaseObjectObservable<any> {
    // Gets total votes
    return this.db.object(`choice1votes/${itemId}`)
  }

  getChoice2Votes(itemId): FirebaseObjectObservable<any> {
    // Gets total votes
    return this.db.object(`choice2votes/${itemId}`)
  }

  updateUserChoice1Vote(itemId, userId, vote): void {
    // Creates or updates user's vote
    let data = {}
    data[userId] = vote
    this.db.object(`choice1vote/${itemId}`).update(data)
  }

}
