import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private router: Router, private afAuth: AngularFireAuth, private af: AngularFireDatabase) { }

  ngOnInit() {
    this.errorMessage = '';
  }

  login(event) {
    event.preventDefault();
    let email = event.target.elements[0].value;
    let password = event.target.elements[1].value;

    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['']);
    }).catch((error) => {
      this.errorMessage = error.message;
    })
  }

}
