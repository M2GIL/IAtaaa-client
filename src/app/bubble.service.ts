import {Injectable, Input, EventEmitter, Output} from '@angular/core';

@Injectable()
export class BubbleService {

  @Input() coord = {};
  @Output() update = new EventEmitter();

  constructor() { }

  public setCoord(coord) {
    this.coord = coord;
    this.update.emit({coord: coord});
  }

}
