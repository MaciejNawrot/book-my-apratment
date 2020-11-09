import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import UserCredential = firebase.auth.UserCredential;

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    console.log(credential);
    return this.updateUserData(credential.user);
  }

  public googlePopupSingin(): Observable<UserCredential> {
    const provider = new auth.GoogleAuthProvider();

    return from(this.afAuth.signInWithPopup(provider));
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

export interface GoogleData {
  profile?: GoogleProfile;
  token: string;
}

export interface GoogleProfile {
  email?: string;
  family_name?: string;
  given_name?: string;
  granted_scopes?: string;
  id?: string;
  locale?: string;
  name?: string;
  picture?: string;
  verified_email?: boolean;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
}


