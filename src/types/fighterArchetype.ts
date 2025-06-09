/**
 *  This is a type that represents an archetype of a fighter. Usually, it is
 *  a ganger, juve, champion, or similar. Each house tends to have specialized
 *  version of each archetype and cause of this we will have a lot of different
 *  archetypes.
 */
export interface FighterArchetype {
  id: string;
  name: string;
  houseId: string;
  baseValue: number;
  rules: string[];
  weapons: string[];
  equipment: string[];
} 