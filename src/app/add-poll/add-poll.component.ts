import { Component } from '@angular/core';
import { PollService } from '../poll.service';
import { AuthenticationService } from '../authentication.service'
import { Poll } from '../poll.model';
import * as firebase from "firebase";

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss'],
  providers: [PollService]
})
export class AddPollComponent {
  private user;
  private userId;
  private userName;
  constructor(private pollService: PollService, private authService: AuthenticationService) { }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
    this.userId = this.user.uid;
    this.userName = this.user.email.split('@')[0];
  }

  getDate() {
    let date = new Date();
    let formattedDate = date.toDateString();
    let day = formattedDate.split(' ')[2];
    let month = formattedDate.split(' ')[1];
    let year = formattedDate.split(' ')[3];
    return month + " " + day + " " + year;
  }

  submitForm(question: string, choice1: string, choice1img: string, choice2: string, choice2img: string) {
    let date = this.getDate();
    let newPoll: Poll = new Poll(question, choice1, choice1img, choice2, choice2img, 0, 0, date, this.userId, this.userName);
    this.pollService.addPoll(newPoll);
  }

}
