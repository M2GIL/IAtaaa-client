import {Component, OnInit, Inject} from '@angular/core';
import {BubbleService} from "../bubble.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {


  tournements = [
    "bla", "blabla", "blablabla", "truc"
  ];

  games = [
    "bla", "blabla", "blablabla", "truc",
    "bla", "blabla", "blablabla", "truc",
    "bla", "blabla", "blablabla", "truc",
  ];

  gameAsideIsOpened = false;

  constructor(
    @Inject('bubble') private _bubble: BubbleService
  ) { }

  ngOnInit() {
  }


  bubble(event: MouseEvent){
    let coord = {
      x: event.clientX,
      y: event.clientY
    };
    this._bubble.setCoord(coord);
  }
}
