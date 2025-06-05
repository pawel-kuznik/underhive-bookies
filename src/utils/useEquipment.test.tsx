import { renderHook } from '@testing-library/react';
import { useEquipment } from './useEquipment';
import { useEquipmentStore } from '../store/equipmentStore';
import type { Equipment } from '../types/equipment';

describe('useEquipment', () => {
    // Setup test data
    const testEquipment: Equipment = {
        id: 'test-equipment-1',
        name: 'Test Equipment',
        description: 'Test description'
    };

    const testEquipment2: Equipment = {
        id: 'test-equipment-2',
        name: 'Test Equipment 2',
        description: 'Test description 2'
    };

    const testEquipmentList = [testEquipment, testEquipment2];

    beforeEach(() => {
        // Reset the store before each test by setting equipment to test data
        useEquipmentStore.setState({ equipment: testEquipmentList });
    });

    it('should return equipment when given a valid equipment ID string', () => {
        const { result } = renderHook(() => useEquipment('test-equipment-1'));
        
        expect(result.current).toEqual(testEquipment);
    });

    it('should return equipment when given a valid equipment object', () => {
        const { result } = renderHook(() => useEquipment(testEquipment));
        
        expect(result.current).toEqual(testEquipment);
    });

    it('should throw an error when given an invalid equipment ID', () => {
        expect(() => {
            renderHook(() => useEquipment('non-existent-equipment'));
        }).toThrow();
    });

    it('should throw an error when given an invalid equipment object', () => {
        const invalidEquipment = { ...testEquipment, id: 'non-existent-equipment' };
        
        expect(() => {
            renderHook(() => useEquipment(invalidEquipment));
        }).toThrow();
    });
}); 