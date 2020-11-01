import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicRoutes } from '../app-paths';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(
    private router: Router,
  ) { }

  handleButtonClick(): void {
    this.router.navigate([BasicRoutes.Hanagram]);
  }
}
