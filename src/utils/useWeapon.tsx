import { useWeaponStore } from "../store/weaponStore";
import type { Weapon } from "../types/weapon";

export function useWeapon(id: string | Weapon) {

    const actualId = typeof (id) === "string" ? id : id.id;
    const { findWeaponById } = useWeaponStore();

    const found = findWeaponById(actualId);

    if (!found) throw Error("Weapon not found");

    return found;
}
