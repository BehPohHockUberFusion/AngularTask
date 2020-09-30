import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularTask';

  constructor(public authService: AuthService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAeTl_sVgOude--wh4WY1oAUOJye4dycWQ",
      authDomain: "uberfusion-ng-task.firebaseapp.com"
    });
  }
}
