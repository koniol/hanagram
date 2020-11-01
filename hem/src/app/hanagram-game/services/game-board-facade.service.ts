import { Injectable } from '@angular/core';
import { RandomizeService } from '../../core/providers/randomize.service';
import { PasswordService } from '../../core/providers/password.service';

@Injectable({
  providedIn: 'root'
})
export class GameBoardFacadeService {

  constructor(
    private randomizeService: RandomizeService,
    private passwordService: PasswordService
  ) { }

  public getPasswords(): string[] {
      const passwords = this.passwordService.getPasswords();
      const randomNumbers = this.randomizeService
        .randRange(5, passwords.length);

      return randomNumbers.map(n => passwords[n].toUpperCase());
  }
}
