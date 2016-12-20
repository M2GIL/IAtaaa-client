import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tournament } from './tournament';

@Injectable()
export class TournamentsService {
  private TOURNAMENTS: Array<Tournament> = [
    new Tournament('Tournament 1'),
    new Tournament('Tournament 2')
  ];

  constructor(http: Http) {}

  getTournaments(): Promise<Tournament[]> {
    return Promise.resolve(this.TOURNAMENTS);
  }
}
