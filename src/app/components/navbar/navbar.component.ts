import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../services/settings.service';

import 'rxjs/operators/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoggedIn: boolean;
loggedInUser: string;
showRegister: boolean;

  constructor(
  	private authService: AuthService,
  	private router: Router,
    private settingsService: SettingsService
    ) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth => {
  		if(auth) {
  			this.isLoggedIn = true;
  			this.loggedInUser = auth.email;
  		} else {
  			this.isLoggedIn = false;
  		}
  	});
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogout() {
  	this.authService.logout();
  	this.router.navigate(['/login']);
  }

}
