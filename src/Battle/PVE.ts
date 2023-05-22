import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter | Character,
    protected monsters: (SimpleFighter | Monster)[],
  ) {
    super(player);
  }
    
  override fight(): number {
    while (this.monsters
      .some((m) => m.lifePoints > 0) && this.player.lifePoints > 0) {
      this.monsters.forEach((monster) => {
        this.fightTime(monster);
      });
    }
    if (this.player.lifePoints === -1) {
      return -1;
    }
    
    return 1;
  }
    
  private fightTime(enemy: SimpleFighter | Monster) {
    this.player.attack(enemy);
    if (enemy.lifePoints > 0) {
      enemy.attack(this.player);
    }
  }
}