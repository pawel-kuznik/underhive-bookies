import { useGangStore } from "../store/gangStore";
import { addWeaponToFighter } from "./addWeaponToFighter";
import { getWeapon } from "./getWeapon";
import { updateGangFighter } from "./updateGangFighter";

export function purchaseWeaponForFighter(gangId: string, fighterId: string, weaponId: string) {

    const weapon = getWeapon(weaponId);

    const gang = useGangStore.getState().findGangById(gangId);
    if (!gang) throw new Error(`Gang with id ${gangId} not found`);

    if (gang.credits < weapon.cost) throw new Error(`Gang with id ${gangId} does not have enough credits to purchase weapon with id ${weaponId}`);

    const fighter = gang.members.find(m => m.id === fighterId);
    if (!fighter) throw new Error(`Fighter with id ${fighterId} not found`);

    gang.credits -= weapon.cost;

    const updatedFighter = addWeaponToFighter(fighter, weaponId);    
    const updatedGang = updateGangFighter(gang, updatedFighter);

    useGangStore.getState().updateGang(updatedGang);
}