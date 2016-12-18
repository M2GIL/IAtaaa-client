import {Component, OnInit, Inject} from '@angular/core';
import {BubbleService} from "../bubble.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menuItems = [];
  tournamentSelected: boolean;

  tournaments = [
    "bla", "blabla", "blablabla", "truc"
  ];

  games = [
    "bla", "blabla", "blablabla", "truc",
    "bla", "blabla", "blablabla", "truc",
    "bla", "blabla", "blablabla", "truc",
  ];

  oneVSone = [
    "Un vs Un", "Deux vs Deux", "blablabla", "truc", "toto"
  ]

  gameAsideIsOpened = false;

  constructor(
    @Inject('bubble') private _bubble: BubbleService
  ) { }

  ngOnInit() {
    this.showTournaments();
  }

  showTournaments() {
    this.tournamentSelected = true;
    this.menuItems = this.tournaments;
  }

  showGames() {
    this.tournamentSelected = false;
    this.menuItems = this.oneVSone;
  }

  isTournamentSelected() {
    return this.tournamentSelected;
  }

  bubble(event: MouseEvent){
    let coord = {
      x: event.clientX,
      y: event.clientY
    };
    this._bubble.setCoord(coord);
  }
}
