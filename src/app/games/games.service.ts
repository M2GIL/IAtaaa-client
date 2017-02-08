import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';

@Injectable()
export class GamesService {
  private gamesURL: string = 'http://localhost:8080/api/games';

  constructor(private http: Http) {}

  getGamesName(): Observable<string[]> {
    return this.http.get(this.gamesURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getGame(name: string) {
    return this.http.get(this.gamesURL + '/' + name)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addGame(game: Game): Observable<Game> {
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers: headers });

    let jsonGame = {
      'gameID': game.name,
      'players': [
        game.playerOne,
        game.playerTwo
      ]
    };

    return this.http.post(this.gamesURL, jsonGame, options)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let data = res.json();
    return data.content || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
