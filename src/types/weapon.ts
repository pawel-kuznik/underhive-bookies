export interface WeaponRange {
  short: number;
  long: number;
}

export interface WeaponAccuracy {
  short: number;
  long: number;
}

export interface Weapon {
  id: string;
  name: string;
  description: string;
  cost: number;
  rules: string[];
  range: WeaponRange;
  accuracy: WeaponAccuracy;
  strength: number;
  armorPiercing: number;
  damage: number;
  ammunition: number;
} 