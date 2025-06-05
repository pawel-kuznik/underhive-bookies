import { calculateFighterValue } from './calculateFighterValue';
import { useWeaponStore } from '../store/weaponStore';
import type { Fighter } from '../types/gang';
import type { Weapon } from '../types/weapon';

describe('calculateFighterValue', () => {
    const testWeapon1: Weapon = {
        id: 'test-weapon-1',
        name: 'Test Weapon 1',
        description: 'Test description 1',
        cost: 50,
        rules: [],
        range: { short: 12, long: 24 },
        accuracy: { short: 4, long: 5 },
        strength: 3,
        armorPiercing: 0,
        damage: 1,
        ammunition: 6
    };

    const testWeapon2: Weapon = {
        id: 'test-weapon-2',
        name: 'Test Weapon 2',
        description: 'Test description 2',
        cost: 75,
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
        useWeaponStore.setState({ weapons: [testWeapon1, testWeapon2] });
    });

    it('should calculate value for fighter with no weapons', () => {
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
            weapons: [],
            wargear: [],
            specialRules: []
        };

        expect(calculateFighterValue(fighter)).toBe(100);
    });

    it('should calculate value for fighter with one weapon', () => {
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

        expect(calculateFighterValue(fighter)).toBe(150);
    });

    it('should calculate value for fighter with multiple weapons', () => {
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
            weapons: ['test-weapon-1', 'test-weapon-2'],
            wargear: [],
            specialRules: []
        };

        expect(calculateFighterValue(fighter)).toBe(225);
    });
}); 