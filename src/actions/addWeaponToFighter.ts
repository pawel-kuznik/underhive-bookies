import { useWeaponStore } from "../store/weaponStore";
import type { Fighter } from "../types/gang";

/**
 *  Add a weapon to a figter.
 */
export function addWeaponToFighter(fighter: Fighter, weaponId: string) {
    
    const weapon = useWeaponStore.getState().findWeaponById(weaponId);
    
    if (!weapon) {
        throw new Error(`Weapon with id ${weaponId} not found`);
    }

    return {
        ...fighter,
        weapons: [...fighter.weapons, weapon.id]
    };
}