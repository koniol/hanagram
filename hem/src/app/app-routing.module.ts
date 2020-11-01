import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicRoutes } from './app-paths';
import { HanagramPaths } from './hanagram-game/hanagram-paths';
import { HanagramGuardService } from './guards/hanagram-guard.service';

const routes: Routes = [
  {path: BasicRoutes.Home, component: HomeComponent, },
  {
    path: HanagramPaths.ROOT,
    canActivate: [HanagramGuardService],
    loadChildren: () => import('./hanagram-game/hanagram.module').then(m => m.HanagramModule),
  },
  {path: '', pathMatch: 'full', redirectTo: BasicRoutes.Home},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HanagramGuardService]
})
export class AppRoutingModule {
}
