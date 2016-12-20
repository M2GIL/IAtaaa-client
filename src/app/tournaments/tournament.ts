import { MenuItem } from '../aside/menuitem';

export class Tournament implements MenuItem {
  private _name: String;

  constructor(_name: String) {
    this._name = _name;
   }

  get name() { return this._name; }
  set name(_name: String) { this._name = _name; }
}
