import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  private _getPlayersURL = 'http://localhost:9999/api/players';

  constructor(private http: Http) {}

  getPlayersName(): Observable<string[]> {
    return this.http.get(this._getPlayersURL)
      .map(this.extractData)
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
