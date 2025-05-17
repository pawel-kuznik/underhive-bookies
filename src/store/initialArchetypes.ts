import type { FighterArchetype } from "../types/fighterArchetype";

export const initialArchetypes: FighterArchetype[] = [
    {
      id: 'archetype-leader',
      name: 'Gang Leader',
      rules: ['rule-leader'],
      wargear: ['Mesh Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'archetype-champion',
      name: 'Gang Champion',
      rules: ['rule-champion'],
      wargear: ['Mesh Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'archetype-ganger',
      name: 'Ganger',
      rules: [],
      wargear: ['Flak Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'archetype-juve',
      name: 'Juve',
      rules: ['rule-juve'],
      wargear: ['Flak Armour'],
      houseId: 'house-escher',
    }
  ];
  