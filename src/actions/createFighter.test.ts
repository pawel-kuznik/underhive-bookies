import { describe, it, expect } from 'vitest';
import { createFighter } from './createFighter';
import type { Fighter } from '../types/gang';

describe('createFighter', () => {
  it('should create a fighter with the provided name', () => {
    const name = 'Test Fighter';
    const fighter = createFighter(name);

    expect(fighter.name).toBe(name);
  });

  it('should generate a unique UUID for each fighter', () => {
    const fighter1 = createFighter('Fighter 1');
    const fighter2 = createFighter('Fighter 2');

    expect(fighter1.id).toBeDefined();
    expect(fighter2.id).toBeDefined();
    expect(fighter1.id).not.toBe(fighter2.id);
  });

  it('should create a fighter with default values', () => {
    const fighter = createFighter('Test Fighter');

    expect(fighter).toMatchObject({
      baseValue: 0,
      templateId: 'default',
      xp: 0,
      archetypeId: 'default',
      weapons: [],
      wargear: [],
      specialRules: [],
    });
  });

  it('should create a fighter with default attributes', () => {
    const fighter = createFighter('Test Fighter');

    expect(fighter.attributes).toEqual({
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
    });
  });

  it('should create a valid Fighter object', () => {
    const fighter = createFighter('Test Fighter');

    // Type check
    const validFighter: Fighter = fighter;
    expect(validFighter).toBeDefined();

    // Structure check
    expect(fighter).toEqual({
      id: expect.any(String),
      name: 'Test Fighter',
      baseValue: 0,
      templateId: 'default',
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
    });
  });
}); 