import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { PasswordService } from '../core/providers/password.service';

@Injectable()
export class HanagramGuardService implements CanActivate {

  constructor(private passwordService: PasswordService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const passwords = this.passwordService.getPasswords();
    return passwords && passwords.length > 5;
  }
}
