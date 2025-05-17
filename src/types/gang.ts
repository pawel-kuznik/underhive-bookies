export interface Attributes {
  movement: number;
  weaponSkill: number;
  ballisticSkill: number;
  strength: number;
  toughness: number;
  wounds: number;
  initiative: number;
  attacks: number;
  leadership: number;
  coolness: number;
  willPower: number;
  intellect: number;
}

export interface Fighter {
  id: string;
  name: string;
  baseValue: number;
  templateId: string;
  archetypeId: string;
  xp: number;
  attributes: Attributes;
  weapons: string[];
  wargear: string[];
  specialRules: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  // Add vehicle properties later
}

export interface Weapon {
  id: string;
  name: string;
  // Add weapon properties later
}

export interface Equipment {
  id: string;
  name: string;
  // Add equipment properties later
}

export interface Note {
  id: string;
  content: string;
  createdAt: Date;
}

export interface Gang {
  id: string;
  name: string;
  house: string;
  members: Fighter[];
  vehicles: Vehicle[];
  stash: (Weapon | Equipment)[];
  reputation: number;
  credits: number;
  notes: Note[];
} 