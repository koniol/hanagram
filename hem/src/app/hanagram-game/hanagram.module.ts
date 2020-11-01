import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinBoardComponent } from './win-board/win-board.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { HanagramRoutingModule } from './hanagram-routing.module';
import { ButtonModule } from '../shared/button/button.module';
import { LooseBoardComponent } from './loose-board/loose-board.component';


@NgModule({
  declarations: [
    GameBoardComponent,
    WinBoardComponent,
    LooseBoardComponent,
  ],
  imports: [
    CommonModule,
    HanagramRoutingModule,
    ButtonModule,
  ],
  exports: [
  ]
})
export class HanagramModule { }
