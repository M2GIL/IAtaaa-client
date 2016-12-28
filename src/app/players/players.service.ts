import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  private getPlayersURL = 'http://localhost:9999/api/players';

  constructor(http: Http) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get(this.getPlayersURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
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
