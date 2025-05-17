import { describe, it, expect } from 'vitest';
import { createFighterArchetype } from './createFighterArchetype';
import type { FighterArchetype } from '../types/fighterArchetype';
import type { House } from '../types/house';

describe('createFighterArchetype', () => {
  const mockHouse: House = {
    id: 'test-house',
    name: 'Test House',
    reference: 'Test Reference',
  };

  it('should create an archetype with the provided name', () => {
    const name = 'Test Archetype';
    const archetype = createFighterArchetype(name, mockHouse);

    expect(archetype.name).toBe(name);
  });

  it('should generate a unique UUID for each archetype', () => {
    const archetype1 = createFighterArchetype('Archetype 1', mockHouse);
    const archetype2 = createFighterArchetype('Archetype 2', mockHouse);

    expect(archetype1.id).toBeDefined();
    expect(archetype2.id).toBeDefined();
    expect(archetype1.id).not.toBe(archetype2.id);
  });

  it('should create an archetype with the correct house ID', () => {
    const archetype = createFighterArchetype('Test Archetype', mockHouse);

    expect(archetype.houseId).toBe(mockHouse.id);
  });

  it('should create an archetype with empty arrays for rules, weapons, and equipment', () => {
    const archetype = createFighterArchetype('Test Archetype', mockHouse);

    expect(archetype.rules).toEqual([]);
    expect(archetype.weapons).toEqual([]);
    expect(archetype.equipment).toEqual([]);
  });

  it('should create a valid FighterArchetype object', () => {
    const archetype = createFighterArchetype('Test Archetype', mockHouse);

    // Type check
    const validArchetype: FighterArchetype = archetype;
    expect(validArchetype).toBeDefined();

    // Structure check
    expect(archetype).toEqual({
      id: expect.any(String),
      name: 'Test Archetype',
      houseId: mockHouse.id,
      rules: [],
      weapons: [],
      equipment: [],
    });
  });
}); 