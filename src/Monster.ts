import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _strength: number;
  protected _lifePoints: number;
  
  constructor() {
    this._strength = 63;
    this._lifePoints = 85;
  }
  
  get strength() {
    return this._strength;
  }

  get lifePoints() {
    return this._lifePoints;
  }
  
  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
export default Monster;