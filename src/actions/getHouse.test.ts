import { describe, it, expect, beforeEach } from 'vitest';
import { getHouse } from './getHouse';
import { useHouseStore } from '../store/houseStore';

describe('getHouse', () => {

  beforeEach(() => {
    // Reset the store to initial state before each test
    useHouseStore.setState({ houses: [] });
  });

  it('should return a house when it exists', () => {
    // Add a house to the store
    const testHouse = useHouseStore.getState().addHouse("Test", "test reference");
    
    const result = getHouse(testHouse.id);
    expect(result).toMatchObject({
      name: testHouse.name,
      reference: testHouse.reference,
    });
  });

  it('should throw an error when house is not found', () => {
    expect(() => getHouse('non-existent-id')).toThrow('House with id non-existent-id not found');
  });

  it('should return the correct house when multiple houses exist', () => {
    // Add multiple houses to the store
    useHouseStore.getState().addHouse('House 1', 'Ref 1');
    const testHouse = useHouseStore.getState().addHouse('House 2', 'Ref 2');
    
    const result = getHouse(testHouse.id);
    expect(result).toMatchObject({
      name: testHouse.name,
      reference: testHouse.reference,
    });
  });
}); 