import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $WebSocket } from '../websocket';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
  ws: $WebSocket;

  private pieces: Array<number>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
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
