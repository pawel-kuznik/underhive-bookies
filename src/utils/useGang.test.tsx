import { renderHook } from '@testing-library/react';
import { useGang } from './useGang';
import { useGangStore } from '../store/gangStore';
import type { Gang } from '../types/gang';

describe('useGang', () => {
    // Setup test data
    const testGang: Gang = {
        id: 'test-gang-1',
        name: 'Test Gang',
        house: 'test-house-1',
        members: [],
        vehicles: [],
        stash: [],
        reputation: 0,
        credits: 0,
        notes: []
    };

    const testGang2: Gang = {
        id: 'test-gang-2',
        name: 'Test Gang 2',
        house: 'test-house-2',
        members: [],
        vehicles: [],
        stash: [],
        reputation: 0,
        credits: 0,
        notes: []
    };

    const testGangs = [testGang, testGang2];

    beforeEach(() => {
        // Reset the store before each test by setting gangs to test data
        useGangStore.setState({ gangs: testGangs });
    });

    it('should return a gang when given a valid gang ID string', () => {
        const { result } = renderHook(() => useGang('test-gang-1'));
        
        expect(result.current).toEqual(testGang);
    });

    it('should return a gang when given a valid gang object', () => {
        const { result } = renderHook(() => useGang(testGang));
        
        expect(result.current).toEqual(testGang);
    });

    it('should throw an error when given an invalid gang ID', () => {
        expect(() => {
            renderHook(() => useGang('non-existent-gang'));
        }).toThrow('Gang not found');
    });

    it('should throw an error when given an invalid gang object', () => {
        const invalidGang = { ...testGang, id: 'non-existent-gang' };
        
        expect(() => {
            renderHook(() => useGang(invalidGang));
        }).toThrow('Gang not found');
    });
}); 