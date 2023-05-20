import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ramger extends Archetype {
  static _numberOfInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ramger._numberOfInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return this._numberOfInstances;
  }
}

export default Ramger;