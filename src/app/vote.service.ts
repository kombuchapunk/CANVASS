import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class VoteService {

  constructor(private db: AngularFireDatabase) { }

  getChoice1Votes(pollId): FirebaseObjectObservable<any> {
    // Gets total votes
    return this.db.object(`choice1votes/${pollId}`)
  }

  getChoice2Votes(pollId): FirebaseObjectObservable<any> {
    // Gets total votes
    return this.db.object(`choice2votes/${pollId}`)
  }

  updateUserChoice1Vote(pollId, voterId, vote): void {
    // Creates or updates user's vote
    let data = {}
    data[voterId] = vote
    this.db.object(`choice1vote/${pollId}`).update(data)
  }

  updateUserChoice2Vote(pollId, voterId, vote): void {
    // Creates or updates user's vote
    let data = {}
    data[voterId] = vote
    this.db.object(`choice2vote/${pollId}`).update(data)
  }

}
