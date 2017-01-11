export class Game {
  private _name: String;
  private _playerOne: string;
  private _playerTwo: string;

  constructor() { }

  get name() { return this._name; }
  set name(_name: String) { this._name = _name; }

  get playerOne() { return this._playerOne; }
  set playerOne(_playerOne: string) { this._playerOne = _playerOne; }

  get playerTwo() { return this._playerTwo; }
  set playerTwo(_playerTwo: string) { this._playerTwo = _playerTwo; }
}
