import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $WebSocket } from '../websocket';
import { Player } from '../players/player';
import { GamesService } from '../games/games.service';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
  ws: $WebSocket;

  private pieces: Array<number>;
  private white: Player;
  private black: Player;
  private victory: string;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    this.gamesService
      .getGame(this.route.snapshot.params['name'])
      .subscribe(data => this.update(data));

    this.ws = new $WebSocket('ws://localhost:8080/connect');
    this.ws.getDataStream().subscribe(
      res => {
        let data = JSON.parse(res.data);
        this.update(data);
      },
      e => console.log('Error: ' + e.message),
      () => console.log('Completed')
    );
  }

  private update(data) {
    console.log(data);
    if (this.route.snapshot.params['name'] === data.id) {
      this.pieces = data.board.cases;
      this.white = data.players[0];
      this.black = data.players[1];

      // TODO Make an enumeration with the status
      if (data.status === 'PLAYER_1_VICTORY') {
        this.victory = `Victoire de ${this.white.name}`;
      } else if (data.status === 'PLAYER_2_VICTORY') {
        this.victory = `Victoire du ${this.black.name}`;
      } else {
        this.victory = `Statut de la partie: ${data.status}`;
      }
    }
  }
}
