import { Component, OnInit } from '@angular/core';
import { Square } from '../board/square';
import { Type } from '../board/type';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private board: Array<Array<Square>>;

  constructor() {
    this.board = [
      [
        new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN),
        new Square(Type.EMPTY),
        new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY),
        new Square(Type.BLACK_PAWN)
      ],
      [
        new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY),
        new Square(Type.BLACK_PAWN),
        new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN),
        new Square(Type.EMPTY)
      ],
      [
        new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN),
        new Square(Type.EMPTY),
        new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY),
        new Square(Type.BLACK_PAWN)
      ],
      [
        new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY),
        new Square(Type.BLACK_PAWN),
        new Square(Type.EMPTY), new Square(Type.BLACK_PAWN), new Square(Type.EMPTY), new Square(Type.BLACK_PAWN),
        new Square(Type.EMPTY)
      ],
      [
        new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY),
        new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY)
      ],
      [
        new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY),
        new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY), new Square(Type.EMPTY)
      ],
      [
        new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN),
        new Square(Type.EMPTY),
        new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY),
        new Square(Type.WHITE_PAWN)
      ],
      [
        new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY),
        new Square(Type.WHITE_PAWN),
        new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN),
        new Square(Type.EMPTY)
      ],
      [
        new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN),
        new Square(Type.EMPTY),
        new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY),
        new Square(Type.WHITE_PAWN)
      ],
      [
        new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY),
        new Square(Type.WHITE_PAWN),
        new Square(Type.EMPTY), new Square(Type.WHITE_PAWN), new Square(Type.EMPTY), new Square(Type.WHITE_PAWN),
        new Square(Type.EMPTY)
      ]
    ];
   }

  ngOnInit() {

  }


}
