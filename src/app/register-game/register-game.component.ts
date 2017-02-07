import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  nameCtrl: FormControl;
  playerOneCtrl: FormControl;
  playerTwoCtrl: FormControl;

  players: Array<Player>;

  @Output() onSubmit = new EventEmitter<Game>();

  constructor(
    private _playersService: PlayersService,
    private _gamesService: GamesService,
    private router: Router,
    fb: FormBuilder) {
    this.nameCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])
    );

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
      name: this.nameCtrl,
      playerOne: this.playerOneCtrl,
      playerTwo: this.playerTwoCtrl
    });
  }

  ngOnInit() {
    this._playersService.getPlayers()
      .subscribe(players => this.players = players);
  }

  register() {
    let game: Game = new Game();
    game.name = this.nameCtrl.value;
    game.playerOne = this.playerOneCtrl.value;
    game.playerTwo = this.playerTwoCtrl.value;

    this._gamesService
      .addGame(game)
      .subscribe(response => {
        this.onSubmit.emit(response);
      });

    this.router.navigate([`game/${game.name}`]);
  }
}
