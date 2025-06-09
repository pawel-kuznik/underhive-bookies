import type { Fighter } from "../types/gang";
import { getFighterArchetype } from "./getFighterArchetype";
import { getWeapon } from "./getWeapon";

export function calculateFighterValue(fighter: Fighter) {

    const archetype = getFighterArchetype(fighter.archetypeId);

    let total = archetype.baseValue;

    fighter.weapons.forEach(weaponId => {
        total += getWeapon(weaponId).cost;
    });
    
    return total;
}

