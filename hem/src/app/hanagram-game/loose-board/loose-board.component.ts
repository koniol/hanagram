import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HanagramPaths } from '../hanagram-paths';

@Component({
  selector: 'app-loose-board',
  templateUrl: './loose-board.component.html',
  styleUrls: ['./loose-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LooseBoardComponent {

  constructor(
    private router: Router,
  ) { }

  handleClick(): void {
    this.router.navigate([HanagramPaths.ROOT]);
  }
}
