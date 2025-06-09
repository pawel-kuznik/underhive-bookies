import type { FighterArchetype } from "../types/fighterArchetype";
import type { House } from "../types/house";

/**
 *  Create an empty fighter archetype object.
 */
export function createFighterArchetype(name: string, house: House) {

    const newArchetype: FighterArchetype = {
        id: crypto.randomUUID(),
        name,
        houseId: house.id,
        baseValue: 0,
        rules: [],
        weapons: [],
        equipment: [],
    };

    return newArchetype;
}