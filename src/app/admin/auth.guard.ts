import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
    private isadmin: UtilityService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const isLoggedIn = this.isadmin.isAdminLoggedIn();
    

    if (isLoggedIn ) {
      return true;
    } else {
      this.router.navigate(['admin']);
      return false;
    }
  }
}
