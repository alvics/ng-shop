import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
// Change afAuth to public from private for development mode
export class NavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) { 
   auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

logout() {
   this.auth.logout();
  }
}