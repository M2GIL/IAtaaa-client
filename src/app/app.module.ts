import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AsideComponent } from './aside/aside.component';
import { BubbleComponent } from './bubble/bubble.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';

import { BubbleService } from './bubble.service';
import { GamesService } from './games/games.service';
import { TournamentsService } from './tournaments/tournaments.service';
import { PlayersService } from './players/players.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AsideComponent,
    BubbleComponent,
    RegisterPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: 'bubble', useClass: BubbleService },
    GamesService,
    TournamentsService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
