import type { Fighter } from "../types/gang";
import { getWeapon } from "./getWeapon";

export function calculateFighterValue(fighter: Fighter) {

    let total = fighter.baseValue;

    fighter.weapons.forEach(weaponId => {
        total += getWeapon(weaponId).cost;
    });
    
    return total;
}