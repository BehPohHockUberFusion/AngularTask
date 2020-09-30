import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then
    (
      response => 
      {
        this.router.navigate(['/account/login'])
      }
    )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/dashboard']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
         error => console.log(error)
      );
  }

  verifyChgPassword(password: string, newPassword: string) {
    let user = firebase.auth().currentUser;
    firebase.auth().signInWithEmailAndPassword(user.email, password)
      .then(
        response => {
          user.updatePassword(newPassword);
          firebase.auth().signOut();
          this.token = null;
          this.router.navigate(['/account/login']);
          // user.getIdToken()
          //   .then(
          //     (token: string) => this.token = token
          //   )
        }
      )
      .catch(
         error => console.log(error)
      );
  }

  resetpassword(email: string) {
    //var emailAddress = "pohhock.beh@uberfusion.com";
    firebase.auth().sendPasswordResetEmail(email)
      .then(
        response => {
          this.router.navigate(['/account/login']);
        }
      )
      .catch(
         error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/home']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
