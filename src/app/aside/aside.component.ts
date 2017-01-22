import { Component, OnInit, Inject } from '@angular/core';
import { BubbleService } from '../bubble.service';
import { GamesService } from '../games/games.service';
import { TournamentsService } from '../tournaments/tournaments.service';
import { PlayersService } from '../players/players.service';
import { Player } from '../players/player';
import { Game } from '../games/game';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  _menuItems: Array<Object> = [];

  _tournamentsSelected: boolean;
  _gamesSelected: boolean;
  _playersSelected: boolean;

  _players: Array<Player> = [];

  games = [
    'bla', 'blabla', 'blablabla', 'truc',
    'soleil', 'wow', 'hein', 'chose',
    'cool', 'bien', 'trop', 'machin'
  ];

  gameAsideIsOpened: boolean = false;

  constructor(
    @Inject('bubble') private _bubble: BubbleService,
    private _gamesService: GamesService,
    private _tournamentsService: TournamentsService,
    private _playersService: PlayersService
  ) { }

  ngOnInit() {
    this.showPlayers();
  }

  showTournaments() {
    this._tournamentsSelected = true;
    this._gamesSelected = !this._tournamentsSelected;
    this._playersSelected = !this._tournamentsSelected;

    this._tournamentsService.getTournaments()
      .then(tournaments => this._menuItems = tournaments);
  }

  showGames() {
    this._gamesSelected = true;
    this._tournamentsSelected = !this._gamesSelected;
    this._playersSelected = !this._gamesSelected;

    this._gamesService.getGamesName()
      .subscribe(games => {
        this._menuItems = [];
        for (let gameName of games) {
          let game = new Game();
          game.name = gameName;
          this._menuItems.push(game);
        }
      });
  }

  showPlayers() {
    this._playersSelected = true;
    this._tournamentsSelected = !this._playersSelected;
    this._gamesSelected = !this._playersSelected;

    this._playersService.getPlayers()
      .subscribe(players => {
        this._players = players;
        this._menuItems = this._players;
      });
  }

  displayBoard(item: Game) {
    if (item instanceof Game) {
      console.log(item);
    }
  }

  bubble(event: MouseEvent) {
    let coord = {
      x: event.clientX,
      y: event.clientY
    };
    this._bubble.setCoord(coord);
  }
}
