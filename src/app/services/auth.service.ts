import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

// Login user
login(email: string, password: string) {
  return new Promise( (resolve, reject) => {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(userData => resolve(userData),
      err => reject(err)
    );
  });
}

// check user status
getAuth() {
  return this.afAuth.authState;
}

// logout user
logout() {
  this.afAuth.auth.signOut();
}

// Register User
register(email: string, password: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(userData => resolve(userData),
      err => reject(err)
    );
  });
}

}
