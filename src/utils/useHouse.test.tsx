import { renderHook } from '@testing-library/react';
import { useHouse } from './useHouse';
import { useHouseStore } from '../store/houseStore';
import type { House } from '../types/house';

describe('useHouse', () => {
    // Setup test data
    const testHouse: House = {
        id: 'test-house-1',
        name: 'Test House',
        reference: 'TH1'
    };

    const testHouse2: House = {
        id: 'test-house-2',
        name: 'Test House 2',
        reference: 'TH2'
    };

    const testHouses = [ testHouse, testHouse2 ];

    beforeEach(() => {
        // Reset the store before each test by setting houses to empty array
        useHouseStore.setState({ houses: testHouses });
        
        // Add test data to the store
        const { addHouse } = useHouseStore.getState();
        addHouse(testHouse.name, testHouse.reference);
        addHouse(testHouse2.name, testHouse2.reference);
    });

    it('should return a house when given a valid house ID string', () => {
        const { result } = renderHook(() => useHouse('test-house-1'));
        
        expect(result.current).toEqual(testHouse);
    });

    it('should return a house when given a valid house object', () => {
        const { result } = renderHook(() => useHouse(testHouse));
        
        expect(result.current).toEqual(testHouse);
    });

    it('should throw an error when given an invalid house ID', () => {
        expect(() => {
            renderHook(() => useHouse('non-existent-house'));
        }).toThrow('House not found');
    });

    it('should throw an error when given an invalid house object', () => {
        const invalidHouse = { ...testHouse, id: 'non-existent-house' };
        
        expect(() => {
            renderHook(() => useHouse(invalidHouse));
        }).toThrow('House not found');
    });
}); 