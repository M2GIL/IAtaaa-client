import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { DefaultViewComponent } from './default-view/default-view.component';

export const ROUTES: Routes = [
  {
    path: 'game/:name',
    component: BoardComponent
  },
  {
    path: '',
    component: DefaultViewComponent
  }
];
