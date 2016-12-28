import { Type } from './type';
import { Difficulty } from './difficulty';

export class Player {
  private _name: string;
  private _type: Type;
  private _ip: string;
  private _port: string;
  private _difficulty: Difficulty;

  public constructor() {  }

  public get name(): string { return this._name; }
  public set name(name: string) { this._name = name; }

  public get type(): Type { return this._type; }
  public set type(type: Type) {this._type = type; }

  public get ip(): string { return this._ip; }
  public set ip(ip: string) { this._ip = ip; }

  public get port(): string { return this._port; }
  public set port(port: string) { this._port = port; }

  public get difficulty(): Difficulty { return this._difficulty; }
  public set difficulty(difficulty: Difficulty) { this._difficulty = difficulty; }
}
