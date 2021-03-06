import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Player } from './player';

@Injectable()
export class PlayersService {
  private PLAYERS_URL = 'http://localhost:8080/api/players';

  constructor(private http: Http) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get(this.PLAYERS_URL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  get(name: string): Observable<Player> {
    return this.http.get(this.PLAYERS_URL + '/' + name)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addPlayer(player: Player): Observable<Player> {
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers: headers });

    let jsonPlayer = {
      'name': player.name,
      'type': player.type,
      'difficulty': player.difficulty,
      'url': player.url
    };

    return this.http.post(this.PLAYERS_URL, jsonPlayer, options)
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
