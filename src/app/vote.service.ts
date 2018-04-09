import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class VoteService {

  constructor(private db: AngularFireDatabase) {
  }

  getUsersWhoVoted(pollId): FirebaseObjectObservable<any> {
    return this.db.object(`voted/${pollId}`)
  }

  updateUserChoice1Vote(pollId, voterId, vote): void {
    // Creates or updates user's vote
    let data = {}
    data[voterId] = vote
    this.db.object(`choice1vote/${pollId}`).update(data)
    let poll = this.db.object(`polls/${pollId}/choice1Counter`).$ref
    .ref.transaction(choice1Counter => {
      return choice1Counter + 1
    })
  }

  updateUserChoice2Vote(pollId, voterId, vote): void {
    // Creates or updates user's vote
    let data = {}
    data[voterId] = vote
    this.db.object(`choice2vote/${pollId}`).update(data)
    let poll = this.db.object(`polls/${pollId}/choice2Counter`).$ref
    .ref.transaction(choice2Counter => {
      return choice2Counter + 1
    })
  }

  disableVote(pollId, voterId): void {
    let data = {}
    data[voterId] = true
    this.db.object(`voted/${pollId}`).update(data);
  }

}
