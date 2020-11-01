import { Component, OnInit } from '@angular/core';
import { GameBoardFacadeService } from '../services/game-board-facade.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';
import { HanagramPaths } from '../hanagram-paths';

enum EBgColor {
  RED = '#ff0000ad',
  GREEN = '#7280005e',
  GRAY = '#EDEDED',
}

interface IPassword {
  letter: string;
  isFound: boolean;
}

interface IAlphabet {
  char: string;
  bgColor: EBgColor;
}

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public password: string;
  public passwords: string[];
  public lives = 6;
  public alphabet: IAlphabet[] = [];
  public chosenPassword: IPassword[] = [];
  public isGameOver = false;
  public nextRound = false;
  private passwordIndex = 0;
  private selectedLetters: string[] = [];

  constructor(
    private gameBoardFacadeService: GameBoardFacadeService,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.passwords = this.gameBoardFacadeService.getPasswords();
    this.password = this.passwords[this.passwordIndex];
    this.chosenPassword = this.preparePassword(this.password);
    this.alphabet = this.prepareAlphabet();
  }

  public nextGame(): void {
    const index = ++this.passwordIndex;

    // Reset data
    this.password = this.passwords[index];
    this.chosenPassword = this.preparePassword(this.password);
    this.selectedLetters = [];
    this.alphabet = this.prepareAlphabet();
    this.nextRound = false;
  }

  public checkUserWinRound(): boolean {
    return this.chosenPassword.every(p => p.isFound);
  }

  public handleLetterClick(alphabetLetter: ButtonComponent, letter: IAlphabet): void {
    this.selectedLetters.push(letter.char);
    const isFound = this.searchLetterInPassword(letter.char);

    if (!this.isCharacterDuplicate(letter)) {
      alphabetLetter.bgColor = isFound ? EBgColor.GREEN : EBgColor.RED;
      this.changeLives(isFound);
    }

    if (this.checkUserWinRound()) {
      this.nextRound = true;
    }

    this.isGameOver = this.lives === 0;
    this.redirectToBoard();
  }

  private isCharacterDuplicate(letter: IAlphabet): boolean {
    return this.selectedLetters.filter(l => l === letter.char).length > 1;
  }

  private redirectToBoard(): void {
    if (this.nextRound && this.passwordIndex === this.passwords.length - 1) {
      this.router.navigate([`${HanagramPaths.ROOT}/${HanagramPaths.WIN_BOARD}`]);
    }
    if (this.isGameOver) {
      this.router.navigate([`${HanagramPaths.ROOT}/${HanagramPaths.LOSE_BOARD}`]);
    }
  }

  private changeLives(found: boolean): void {
    if (!found) {
      this.lives = this.lives === 0 ? 0 : this.lives - 1;
    }
  }

  private prepareAlphabet(): IAlphabet[] {
    return [...Array(26)]
      .map((_, i) => ({char: String.fromCharCode(i + 65), bgColor: EBgColor.GRAY}));
  }

  private searchLetterInPassword(letter: string): boolean {
    let isFound = false;
    for (let i = 0; i < this.chosenPassword.length; i++) {
      if (this.password.charAt(i) === letter) {
        this.chosenPassword[i].letter = letter;
        this.chosenPassword[i].isFound = true;
        isFound = true;
      }
    }
    return isFound;

  }

  private isContainWhiteSpaceChars(letter: string): boolean {
    return !/[^\s]/.test(letter);
  }

  private preparePassword(password: string): Array<IPassword> {
    const p: IPassword[] = [];
    for (let i = 0; i < password.length; i++) {
      const char = password.charAt(i);
      const isWhiteSpace = this.isContainWhiteSpaceChars(char);
      p.push({
        letter: isWhiteSpace ? ' ' : '_',
        isFound: isWhiteSpace ? true : false,
      });
    }

    return p;
  }

}
