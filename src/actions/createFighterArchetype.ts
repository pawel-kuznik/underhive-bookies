import type { FighterArchetype } from "../types/fighterArchetype";
import type { House } from "../types/house";

export function createFighterArchetype(name: string, house: House) {

    const newArchetype: FighterArchetype = {
        id: crypto.randomUUID(),
        name,
        houseId: house.id,
        rules: [],
        weapons: [],
        equipment: [],
    };

    return newArchetype;
}