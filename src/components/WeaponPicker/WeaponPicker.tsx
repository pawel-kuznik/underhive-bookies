import { useState } from "react";
import { useWeaponStore } from "../../store/weaponStore";
import type { Weapon } from "../../types/weapon";
import "./WeaponPicker.css";

export interface WeaponPickerProps {
    onPick?: (weapon: Weapon) => void;
}

/**
 *  This is a component that displays a list of weapons from which the user can
 *  pick one or more. When user picks a weapon, the onPick callback is called
 *  with an instance of that weapon.
 */
export function WeaponPicker({ onPick }: WeaponPickerProps) {
    const [keyword, setKeyword] = useState<string>("");
    const { weapons } = useWeaponStore();
    const sortedWeapons = weapons.sort((a, b) => a.name.localeCompare(b.name));
    const filteredWeapons = sortedWeapons.filter(weapon => 
        weapon.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <table className="weaponpicker">
            <thead>
                <tr>
                    <th colSpan={2}>
                        <input type="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredWeapons.map((weapon) => (
                    <tr key={weapon.id} onClick={() => onPick?.(weapon)}>
                        <td>{weapon.name}</td>
                        <td>{weapon.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} 