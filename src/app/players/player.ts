import { Type } from './type';
import { Difficulty } from './difficulty';

export class Player {
  private _name: string;
  private _type: Type;
  private _url: string;
  private _difficulty: Difficulty;

  public constructor() {  }

  public get name(): string { return this._name; }
  public set name(name: string) { this._name = name; }

  public get type(): Type { return this._type; }
  public set type(type: Type) {this._type = type; }

  public get url(): string { return this._url; }
  public set url(url: string) { this._url = url; }

  public get difficulty(): Difficulty { return this._difficulty; }
  public set difficulty(difficulty: Difficulty) { this._difficulty = difficulty; }
}
