import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

// Saving users to firebase database
   save(user: firebase.User) {
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
    }
   // get isAdmin from firebase
 get(uid: string): FirebaseObjectObservable<AppUser> {
   return this.db.object('/users/' + uid);
   }
 }

