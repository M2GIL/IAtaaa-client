import { Type } from './type';
import { Difficulty } from './difficulty';

export class Player {
  public name: string;
  public type: Type;
  public url: string;
  public difficulty: Difficulty;
  public token: string;

  public constructor() {  }
}
