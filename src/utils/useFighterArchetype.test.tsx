import { renderHook } from '@testing-library/react';
import { useFighterArchetype } from './useFighterArchetype';
import { useFighterArchetypeStore } from '../store/fighterArchetypeStore';
import type { FighterArchetype } from '../types/fighterArchetype';

describe('useFighterArchetype', () => {
    // Setup test data
    const testArchetype: FighterArchetype = {
        id: 'test-archetype-1',
        name: 'Test Archetype',
        houseId: 'test-house-1',
        rules: [],
        weapons: [],
        equipment: []
    };

    const testArchetype2: FighterArchetype = {
        id: 'test-archetype-2',
        name: 'Test Archetype 2',
        houseId: 'test-house-2',
        rules: [],
        weapons: [],
        equipment: []
    };

    const testArchetypes = [testArchetype, testArchetype2];

    beforeEach(() => {
        // Reset the store before each test by setting archetypes to test data
        useFighterArchetypeStore.setState({ archetypes: testArchetypes });
    });

    it('should return an archetype when given a valid archetype ID', () => {
        const { result } = renderHook(() => useFighterArchetype('test-archetype-1'));
        
        expect(result.current).toEqual(testArchetype);
    });

    it('should throw an error when given an invalid archetype ID', () => {
        expect(() => {
            renderHook(() => useFighterArchetype('non-existent-archetype'));
        }).toThrow('Archetype not found');
    });
}); 