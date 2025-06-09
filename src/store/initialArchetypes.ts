import type { FighterArchetype } from "../types/fighterArchetype";

export const initialArchetypes: FighterArchetype[] = [
    {
      id: 'escher-gang-queen',
      name: 'Esher Gang Queen',
      baseValue: 125,
      rules: ['rule-leader'],
      wargear: ['Mesh Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'escher-gang-matriarch',
      name: 'Escher Gang Matriarch',
      baseValue: 100,
      rules: ['rule-champion'],
      wargear: ['Mesh Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'escher-death-maiden',
      name: 'Escher Death-Maiden',
      baseValue: 115,
      rules: [],
      wargear: ['Flak Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'escher-wyld-runner',
      name: 'Escher Wyld Runner',
      baseValue: 45,
      rules: ['rule-juve'],
      wargear: ['Flak Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'escher-gang-sister',
      name: 'Escher Gang Sister',
      baseValue: 50,
      rules: ['rule-juve'],
      wargear: ['Flak Armour'],
      houseId: 'house-escher',
    },
    {
      id: 'escher-little-sister',
      name: 'Escher Little Sister',
      baseValue: 20,
      rules: ['rule-juve'],
      wargear: ['Flak Armour'],
      houseId: 'house-escher',
    }
  ];
  