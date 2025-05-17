import { useWeaponStore } from "../../store/weaponStore";
import type { Weapon } from "../../types/weapon";

export interface WeaponPickerProps {
    onPick?: (weapon: Weapon) => void;
}

export function WeaponPicker({ onPick }: WeaponPickerProps) {
    const { weapons } = useWeaponStore();

    return (
        <div>
            {weapons.map((weapon) => (
                <div key={weapon.id} onClick={() => onPick?.(weapon)}>
                    <h2>{weapon.name}</h2>
                    <p>{weapon.description}</p>
                </div>
            ))}
        </div>
    )
} 