import { addWeaponToFighter } from './addWeaponToFighter';
import { useWeaponStore } from '../store/weaponStore';
import type { Fighter } from '../types/gang';
import type { Weapon } from '../types/weapon';

describe('addWeaponToFighter', () => {
    const testFighter: Fighter = {
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

    it('should add a weapon to a fighter', () => {
        const updatedFighter = addWeaponToFighter(testFighter, 'test-weapon-1');
        expect(updatedFighter.weapons).toContain('test-weapon-1');
    });

    it('should preserve existing weapons when adding a new one', () => {
        const fighterWithWeapon = {
            ...testFighter,
            weapons: ['existing-weapon']
        };
        const updatedFighter = addWeaponToFighter(fighterWithWeapon, 'test-weapon-1');
        expect(updatedFighter.weapons).toContain('existing-weapon');
        expect(updatedFighter.weapons).toContain('test-weapon-1');
    });

    it('should throw an error when weapon is not found', () => {
        expect(() => {
            addWeaponToFighter(testFighter, 'non-existent-weapon');
        }).toThrow('Weapon with id non-existent-weapon not found');
    });
}); 