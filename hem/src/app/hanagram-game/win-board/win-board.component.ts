import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HanagramPaths } from '../hanagram-paths';

@Component({
  selector: 'app-win-board',
  templateUrl: './win-board.component.html',
  styleUrls: ['./win-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WinBoardComponent {

  constructor(
    private router: Router,
  ) { }

  handleClick(): void {
    this.router.navigate([HanagramPaths.ROOT]);
  }

}
