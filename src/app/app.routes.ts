import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { RegisterGameComponent } from './register-game/register-game.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerViewComponent } from './player-view/player-view.component';

export const ROUTES: Routes = [
  {
    path: 'game/:name',
    component: BoardComponent
  },
  {
    path: 'register-game',
    component: RegisterGameComponent
  },
  {
    path: 'register-player',
    component: RegisterPlayerComponent
  },
  {
    path: 'player/:name',
    component: PlayerViewComponent
  },
  {
    path: '',
    component: DefaultViewComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
