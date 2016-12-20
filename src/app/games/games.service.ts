import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from './game';

@Injectable()
export class GamesService {
  private GAMES: Array<Game> = [
    new Game('Game 1'),
    new Game('Game 2')
  ];

  constructor(http: Http) {}

  getGames(): Promise<Game[]> {
    return Promise.resolve(this.GAMES);
  }
}
