import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Player } from '../players/player';
import { Type } from '../players/type';
import { Difficulty } from '../players/difficulty';

import { PlayersService } from '../players/players.service';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.scss']
})
export class RegisterPlayerComponent {
  playerForm: FormGroup;

  typeCtrl: FormControl;
  nameCtrl: FormControl;
  ipCtrl: FormControl;
  portCtrl: FormControl;
  difficultyCtrl: FormControl;

  @Output() onSubmit = new EventEmitter<Player>();

  types = [
    { 'value': Type.AI, 'text': 'IA' },
    { 'value': Type.HUMAN, 'text': 'Humain' }
  ];
  difficulties = [
    { 'value': Difficulty.EASY, 'text': 'Facile' },
    { 'value': Difficulty.MEDIUM, 'text': 'Moyen' },
    { 'value': Difficulty.HARD, 'text': 'Difficile' },
  ];

  constructor(private _playersService: PlayersService, fb: FormBuilder) {
    this.typeCtrl = fb.control(
      Type.AI,
      Validators.compose([Validators.required])
    );
    this.nameCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])
    );
    this.ipCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(16)
      ])
    );
    this.portCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5)
      ])
    );
    this.difficultyCtrl = fb.control(
      Difficulty.MEDIUM,
      Validators.compose([Validators.required])
    );

    this.playerForm = fb.group({
      type: this.typeCtrl,
      name: this.nameCtrl,
      ip: this.ipCtrl,
      port: this.portCtrl,
      difficulty: this.difficultyCtrl
    });
  }

  reset() {
    this.typeCtrl.setValue('');
    this.nameCtrl.setValue('');
    this.ipCtrl.setValue('');
    this.portCtrl.setValue('');
    this.difficultyCtrl.setValue('');
  }

  register() {
    let player: Player = new Player();
    player.type = this.typeCtrl.value;
    player.name = this.nameCtrl.value;
    player.ip = this.ipCtrl.value;
    player.port = this.portCtrl.value;
    player.difficulty = this.difficultyCtrl.value;

    this._playersService.addPlayer(player)
      .subscribe(response => {
        this.onSubmit.emit(response);
      });
  }
}
