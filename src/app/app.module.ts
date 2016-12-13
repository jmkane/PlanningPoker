import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import PlayerService from './shared/player.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // RouterModule.forRoot([
    //   {
    //     path: 'login',
    //     component: LoginComponent
    //   },
    //   {
    //     path: 'player',
    //     component: PlayerComponent
    //   },
    //   {
    //     path: 'login',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    //   },
    // ])
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
