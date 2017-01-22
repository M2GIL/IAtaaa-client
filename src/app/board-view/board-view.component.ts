import { Component, OnInit } from '@angular/core';
import { $WebSocket } from '../websocket';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
  ws: $WebSocket;

  private pieces: Array<number>;

  constructor() { }

  ngOnInit() {
    console.log('Trying to subscribe to ws');
    this.ws = new $WebSocket('ws://localhost:8080/connect');
    this.ws.getDataStream().subscribe(
      res => {
        let data = JSON.parse(res.data);
        console.log(data);
        if (data instanceof Array) {

        } else {
          this.pieces = data.board.board;
        }
      },
      e => console.log('Error: ' + e.message),
      () => console.log('Completed')
    );
  }

}
