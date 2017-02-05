import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $WebSocket } from '../websocket';
import { Player } from '../players/player';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO : Call the API to get the players.
    this.white = new Player();
    this.white.name = 'White';
    this.black = new Player();
    this.black.name = 'Black';

    this.ws = new $WebSocket('ws://localhost:8080/connect');
    this.ws.getDataStream().subscribe(
      res => {
        let data = JSON.parse(res.data);

        if (this.route.snapshot.params['name'] === data.id) {
          this.pieces = data.board.cases;
        }
      },
      e => console.log('Error: ' + e.message),
      () => console.log('Completed')
    );
  }

}
