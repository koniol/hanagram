import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type Size = 'small' | 'normal' | 'big' | 'custom';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input()
  size: Size = 'normal';

  @Input()
  color: string;

  @Input()
  bgColor: string;

}
