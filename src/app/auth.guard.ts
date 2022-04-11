import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated
  constructor(
    private auth: AuthService,
    private router: Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean> {
      this.isAuthenticated = this.auth.getAuthStatus();
      if (!this.isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return this.isAuthenticated;
  }
  
  
}
