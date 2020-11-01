import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { LooseBoardComponent } from './loose-board/loose-board.component';
import { WinBoardComponent } from './win-board/win-board.component';
import { HanagramPaths } from './hanagram-paths';


const routes: Routes = [
  {
    path: HanagramPaths.GAME_BOARD,
    component: GameBoardComponent,
  },
  {
    path: HanagramPaths.LOSE_BOARD,
    component: LooseBoardComponent,
  },
  {
    path: HanagramPaths.WIN_BOARD,
    component: WinBoardComponent,
  },
  {path: '**', redirectTo: HanagramPaths.GAME_BOARD}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class HanagramRoutingModule {
}
