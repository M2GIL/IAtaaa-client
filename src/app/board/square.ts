import { Type } from '../board/type';

export class Square {
  private _type : Type;

  constructor(type: Type) {
    this._type = type;
  }

  get type(): Type {
    return this._type;
  }

  set type(type: Type) {
    this._type = type;
  }
}
