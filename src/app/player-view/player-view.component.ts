import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayersService } from '../players/players.service';
import { Player } from '../players/player';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.scss']
})
export class PlayerViewComponent implements OnInit {
  private player: Player;


  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.playersService.get(name).subscribe(player => {
        if (player === undefined) {
          this.router.navigate(['404']);
        }

        this.player = player;
      });
    });
  }

}
