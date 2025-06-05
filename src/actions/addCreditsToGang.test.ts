import { addCreditsToGang } from './addCreditsToGang';
import { useGangStore } from '../store/gangStore';
import type { Gang } from '../types/gang';

describe('addCreditsToGang', () => {
    const testGang: Gang = {
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

    beforeEach(() => {
        // Reset the store before each test
        useGangStore.setState({ gangs: [testGang] });
    });

    it('should add credits to a gang', () => {
        addCreditsToGang('test-gang-1', 50);
        const updatedGang = useGangStore.getState().findGangById('test-gang-1');
        expect(updatedGang?.credits).toBe(150);
    });

    it('should handle negative credits', () => {
        addCreditsToGang('test-gang-1', -30);
        const updatedGang = useGangStore.getState().findGangById('test-gang-1');
        expect(updatedGang?.credits).toBe(70);
    });

    it('should throw an error when gang is not found', () => {
        expect(() => {
            addCreditsToGang('non-existent-gang', 50);
        }).toThrow('Gang with id non-existent-gang not found');
    });
}); 