import { Component, OnInit, Inject, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { BubbleService } from '../bubble.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  @Input() y = 0;

  constructor(
    @Inject('bubble') private _bubble: BubbleService,
    myElement: ElementRef
  ) {
    this._bubble.update.subscribe( value => {

      let b = myElement.nativeElement.children[0];

      this.y = value.coord.y - b.clientHeight / 2;
      if (this.y < 0) {
        this.y = 0;
      }
    });

  }

  ngOnInit() {
  }
}
