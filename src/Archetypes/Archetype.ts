import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  constructor(name: string) {
    this._cost = 0;
    this._name = name;
    this._special = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get name(): string {
    return this._name;
  }
  
  get cost(): number {
    return this._cost;
  }

  get special(): number {
    return this._special;
  }
}

export default Archetype;