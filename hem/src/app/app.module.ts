import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from './shared/button/button.module';
import { CoreModule } from './core/core.module';
import { PasswordService } from './core/providers/password.service';
import { HanagramModule } from './hanagram-game/hanagram.module';

const initializeApp = (passwordService: PasswordService) => {
  return (): Promise<any> => {
    return passwordService.loadsPasswords().toPromise();
  };
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ButtonModule,
    HanagramModule,
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializeApp, deps: [PasswordService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
