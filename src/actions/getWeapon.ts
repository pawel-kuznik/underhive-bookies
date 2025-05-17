import { useWeaponStore } from "../store/weaponStore";
import type { Weapon } from "../types/weapon";

export function getWeapon(id: string) : Weapon {
    const weapon = useWeaponStore.getState().findWeaponById(id);
    if (!weapon) throw new Error(`Weapon with id ${id} not found`);
    return weapon;
}