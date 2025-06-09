import { describe, it, expect } from 'vitest';
import { createWeapon } from './createWeapon';

describe('createWeapon', () => {
  it('should create a weapon with default values', () => {
    const weapon = createWeapon('Test Weapon');

    expect(weapon).toMatchObject({
      name: 'Test Weapon',
      description: '',
      cost: 0,
      rules: [],
      range: { short: 0, long: 0 },
      accuracy: { short: 0, long: 0 },
      strength: 0,
      armorPiercing: 0,
      damage: 0,
      ammunition: 0,
    });

    // Check that id is a valid UUID
    expect(weapon.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  });

  it('should create weapons with unique IDs', () => {
    const weapon1 = createWeapon('Weapon 1');
    const weapon2 = createWeapon('Weapon 2');

    expect(weapon1.id).not.toBe(weapon2.id);
  });

  it('should handle empty name', () => {
    const weapon = createWeapon('');

    expect(weapon).toMatchObject({
      name: '',
      description: '',
      cost: 0,
      rules: [],
      range: { short: 0, long: 0 },
      accuracy: { short: 0, long: 0 },
      strength: 0,
      armorPiercing: 0,
      damage: 0,
      ammunition: 0,
    });
  });
}); 