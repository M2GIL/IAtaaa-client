import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Game } from '../games/game';
import { Player } from '../players/player';

import { GamesService } from '../games/games.service';
import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-register-game',
  templateUrl: './register-game.component.html',
  styleUrls: ['./register-game.component.scss']
})
export class RegisterGameComponent implements OnInit {
  gameForm: FormGroup;

  playerOneCtrl: FormControl;
  playerTwoCtrl: FormControl;

  players: Array<Player>;

  @Output() onSubmit = new EventEmitter<Game>();

  constructor(private _playersService: PlayersService, fb: FormBuilder) {
    this.playerOneCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required
      ])
    );

    this.playerTwoCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required
      ])
    );

    this.gameForm = fb.group({
      playerOne: this.playerOneCtrl,
      playerTwo: this.playerTwoCtrl
    });
  }

  ngOnInit() {
    this._playersService.getPlayersName().subscribe(players => {
        this.players = [];
        for (let playerName of players) {
          let player = new Player();
          player.name = playerName;
          this.players.push(player);
        }
      });
  }
}
