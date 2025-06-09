import type { Weapon } from "../types/weapon";

/**
 *  Create a new weapon instance
 */
export function createWeapon(
  name: string,
): Weapon {
  return {
    id: crypto.randomUUID(),
    name,
    description: "",
    cost: 0,
    rules: [],
    range: { short: 0, long: 0 },
    accuracy: { short: 0, long: 0 },
    strength: 0,
    armorPiercing: 0,
    damage: 0,
    ammunition: 0,
  };
} 