import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn){
      console.log('true')
      return true
    } else {
      this.router.navigate(['']);
      return false
    }
  }

}
