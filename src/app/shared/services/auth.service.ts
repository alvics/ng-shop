import { UserService } from 'shared/services/user.service';
import { AppUser } from 'shared/models/app-user';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ActivatedRoute } from '@angular/router';




@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor( 
      private userService: UserService,
      private afAuth: AngularFireAuth,
      private route: ActivatedRoute,
     ) {
    this.user$ = afAuth.authState;
   }


   signUp(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch();
      console.error();
      }

      loginEmail(email: string, password: string) {
        return new Promise<any>((resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then( userData =>  resolve(userData),
          err => reject (err));
        });
      }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


 logout() {
  this.afAuth.auth.signOut();
 }

// The rxjs switchMap operator/cancell and the new observable is subscribed 
 get appUser$(): Observable<AppUser> {
    return this.user$
    .switchMap(user => {
      if (user) {return this.userService.get(user.uid)}
       return Observable.of(null);
    });
  } 
}
