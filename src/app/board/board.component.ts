import { Component, Input, OnChanges } from '@angular/core';
import { Square } from '../board/square';
import { Type } from '../board/type';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {
  private static SIZE: number = 10;

  @Input() pieces: Array<number>;
  private board: Array<Array<Square>>;

  constructor() {
  }

  public update(squares: Array<number>) {
    this.parseBoard(squares);
  }

  private parseBoard(squares: Array<number>): void {
    if (squares.length !== BoardComponent.SIZE * 10 / 2) {
      console.error('EXCEPTION : The number of squares should be equal to ' + (BoardComponent.SIZE * 10 / 2));
    }

    this.board = new Array();

    let s = 0;
    for (let i = 0; i < BoardComponent.SIZE ; i++) {

      this.board[i] = new Array();

      for (let j = 0; j < BoardComponent.SIZE; j++) {
        if ((i + j) % 2 !== 0) {
          this.board[i][j] = new Square(squares[s++]);
        } else {
          this.board[i][j] = new Square(Type.EMPTY);
        }
      }
    }
  }

  ngOnChanges() {
    if (this.pieces !== undefined) {
      this.parseBoard(this.pieces);
    }
  }
}
