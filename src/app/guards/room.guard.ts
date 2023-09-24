import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

// export const roomGuard: CanActivateChildFn = (childRoute, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})

export class RoomGuard implements CanActivateChild {

  constructor(private loginService: LoginService){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.isAdmin;
  }
  
}

