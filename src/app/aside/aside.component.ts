import { Component, OnInit, Inject } from '@angular/core';
import { BubbleService } from '../bubble.service';
import { GamesService } from '../games/games.service';
import { TournamentsService } from '../tournaments/tournaments.service';
import { MenuItem } from './menuitem';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menuItems: Array<MenuItem> = [];
  tournamentSelected: boolean;

  games = [
    "bla", "blabla", "blablabla", "truc",
    "bla", "blabla", "blablabla", "truc",
    "bla", "blabla", "blablabla", "truc",
  ];

  gameAsideIsOpened = false;

  constructor(
    @Inject('bubble') private _bubble: BubbleService,
    private _gamesService: GamesService,
    private _tournamentsService: TournamentsService
  ) { }

  ngOnInit() {
    this.showTournaments();
  }

  showTournaments() {
    this.tournamentSelected = true;
    this._tournamentsService.getTournaments()
      .then(tournaments => this.menuItems = tournaments);
  }

  showGames() {
    this.tournamentSelected = false;
    this._gamesService.getGames()
      .then(games => this.menuItems = games);
  }

  isTournamentSelected() {
    return this.tournamentSelected;
  }

  bubble(event: MouseEvent){
    let coord = {
      x: event.clientX,
      y: event.clientY
    };
    this._bubble.setCoord(coord);
  }
}
