import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
  	private afAuth: AngularFireAuth,
  	private router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
  	return this.afAuth.authState.map(auth => {
  		if(!auth) {
  			this.router.navigate(['/login']);
  			return false;
  		} else {
  			return true;
  		}
  	});	
  }

}  