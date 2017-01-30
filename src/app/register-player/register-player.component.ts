import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
export class RegisterPlayerComponent implements OnInit {
  playerForm: FormGroup;

  typeCtrl: FormControl;
  nameCtrl: FormControl;
  urlCtrl: FormControl;
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
    this.urlCtrl = fb.control(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(7)
      ])
    );
    this.difficultyCtrl = fb.control(
      Difficulty.MEDIUM,
      Validators.compose([Validators.required])
    );

    this.playerForm = fb.group({
      type: this.typeCtrl,
      name: this.nameCtrl,
      url: this.urlCtrl,
      difficulty: this.difficultyCtrl
    });
  }

  ngOnInit() {
    this.urlCtrl.setValue('http://');
  }

  reset() {
    this.typeCtrl.setValue('');
    this.nameCtrl.setValue('');
    this.urlCtrl.setValue('http://');
    this.difficultyCtrl.setValue('');
  }

  register() {
    let player: Player = new Player();
    player.type = this.typeCtrl.value;
    player.name = this.nameCtrl.value;
    player.url = this.urlCtrl.value.toLowerCase();
    player.difficulty = this.difficultyCtrl.value;

    this._playersService.addPlayer(player)
      .subscribe(response => {
        this.onSubmit.emit(response);
      });
  }
}
