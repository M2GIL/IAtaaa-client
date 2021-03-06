import { Routes } from '@angular/router';
import { BoardViewComponent } from './board-view/board-view.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { RegisterGameComponent } from './register-game/register-game.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { FakeComponent } from './fake.component';

export const ROUTES: Routes = [
  {
    path: 'fake/:name',
    component: FakeComponent
  },
  {
    path: 'game/:name',
    component: BoardViewComponent
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
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
