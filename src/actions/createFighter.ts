import type { Fighter } from "../types/gang";

export function createFighter(name: string) : Fighter {
    return {
          id: crypto.randomUUID(),
          name: name,
          baseValue: 0,
          templateId: 'default', // This should be selected from available templates
          xp: 0,
          archetypeId: 'default',
          attributes: {
            movement: 4,
            weaponSkill: 3,
            ballisticSkill: 3,
            strength: 3,
            toughness: 3,
            wounds: 1,
            initiative: 3,
            attacks: 1,
            leadership: 6,
            coolness: 6,
            willPower: 6,
            intellect: 6,
          },
          weapons: [],
          wargear: [],
          specialRules: [],
        };
    
}