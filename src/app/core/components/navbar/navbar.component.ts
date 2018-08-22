import { Observable } from 'rxjs/Observable';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
// Change afAuth to public from private for development mode
export class NavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { 
 }

 async ngOnInit() {
  this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
<<<<<<< HEAD

   this.cart$ = await this.shoppingCartService.getCart();
  }
=======
  this.cart$ = await this.shoppingCartService.getCart();
   }
>>>>>>> 987ba9ac6eedf280e254daf36badeaa3a222cd76

logout() {
   this.auth.logout();
  }
}
