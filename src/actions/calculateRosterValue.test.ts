import { calculateRosterValue } from './calculateRosterValue';
import { useWeaponStore } from '../store/weaponStore';
import type { Roster } from '../types/roster';
import type { Fighter } from '../types/gang';
import type { Weapon } from '../types/weapon';

describe('calculateRosterValue', () => {
    const testWeapon: Weapon = {
        id: 'test-weapon-1',
        name: 'Test Weapon',
        description: 'Test description',
        cost: 50,
        rules: [],
        range: { short: 12, long: 24 },
        accuracy: { short: 4, long: 5 },
        strength: 3,
        armorPiercing: 0,
        damage: 1,
        ammunition: 6
    };

    beforeEach(() => {
        // Reset the store before each test
        useWeaponStore.setState({ weapons: [testWeapon] });
    });

    it('should calculate value for roster with no fighters', () => {
        const roster: Roster = {
            id: 'test-roster-1',
            gangId: 'test-gang-1',
            fighters: []
        };

        expect(calculateRosterValue(roster)).toBe(0);
    });

    it('should calculate value for roster with one fighter', () => {
        const fighter: Fighter = {
            id: 'test-fighter-1',
            name: 'Test Fighter',
            baseValue: 100,
            templateId: 'test-template',
            archetypeId: 'test-archetype',
            xp: 0,
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
                intellect: 6
            },
            weapons: ['test-weapon-1'],
            wargear: [],
            specialRules: []
        };

        const roster: Roster = {
            id: 'test-roster-1',
            gangId: 'test-gang-1',
            fighters: [fighter]
        };

        expect(calculateRosterValue(roster)).toBe(150); // 100 base value + 50 weapon cost
    });

    it('should calculate value for roster with multiple fighters', () => {
        const fighter1: Fighter = {
            id: 'test-fighter-1',
            name: 'Test Fighter 1',
            baseValue: 100,
            templateId: 'test-template',
            archetypeId: 'test-archetype',
            xp: 0,
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
                intellect: 6
            },
            weapons: ['test-weapon-1'],
            wargear: [],
            specialRules: []
        };

        const fighter2: Fighter = {
            id: 'test-fighter-2',
            name: 'Test Fighter 2',
            baseValue: 150,
            templateId: 'test-template',
            archetypeId: 'test-archetype',
            xp: 0,
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
                intellect: 6
            },
            weapons: ['test-weapon-1'],
            wargear: [],
            specialRules: []
        };

        const roster: Roster = {
            id: 'test-roster-1',
            gangId: 'test-gang-1',
            fighters: [fighter1, fighter2]
        };

        expect(calculateRosterValue(roster)).toBe(350); // (100 + 50) fighter 1 + (150 + 50) fighter 2
    });
}); 