import { calculateGangValue } from './calculateGangValue';
import { useWeaponStore } from '../store/weaponStore';
import type { Gang } from '../types/gang';
import type { Weapon } from '../types/weapon';

describe('calculateGangValue', () => {
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

    it('should calculate value for gang with no members', () => {
        const gang: Gang = {
            id: 'test-gang-1',
            name: 'Test Gang',
            house: 'test-house-1',
            members: [],
            vehicles: [],
            stash: [],
            reputation: 0,
            credits: 100,
            notes: []
        };

        expect(calculateGangValue(gang)).toBe(100);
    });

    it('should calculate value for gang with one member', () => {
        const gang: Gang = {
            id: 'test-gang-1',
            name: 'Test Gang',
            house: 'test-house-1',
            members: [{
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
            }],
            vehicles: [],
            stash: [],
            reputation: 0,
            credits: 100,
            notes: []
        };

        expect(calculateGangValue(gang)).toBe(250); // 100 credits + 100 base value + 50 weapon cost
    });

    it('should calculate value for gang with multiple members', () => {
        const gang: Gang = {
            id: 'test-gang-1',
            name: 'Test Gang',
            house: 'test-house-1',
            members: [
                {
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
                },
                {
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
                }
            ],
            vehicles: [],
            stash: [],
            reputation: 0,
            credits: 100,
            notes: []
        };

        expect(calculateGangValue(gang)).toBe(450); // 100 credits + (100 + 50) fighter 1 + (150 + 50) fighter 2
    });
}); 