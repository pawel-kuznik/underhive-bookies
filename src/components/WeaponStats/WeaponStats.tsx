import type { ReactNode } from 'react';
import { useWeaponStore } from '../../store/weaponStore';
import type { Weapon } from '../../types/weapon';

export interface WeaponStatsProps {
    weaponId: string;
    headers?: boolean;

    name?: boolean;
    credits?: boolean;

    actions?: ReactNode;
}

/**
 * A component that displays weapon statistics in a table format.
 */
export function WeaponStats({ weaponId, headers = true, name = true, credits = true, actions }: WeaponStatsProps) {
    const findWeaponById = useWeaponStore(state => state.findWeaponById);
    const weapon = findWeaponById(weaponId);

    if (!weapon) {
        return null;
    }

    const row = <tr>
        {name && <td className="p-2 border">{weapon.name}</td>}
        {credits && <td className="p-2 border">{weapon.cost} credits</td>}
        <td className="p-2 border">
            Short: {weapon.range.short}", Long: {weapon.range.long}"
        </td>
        <td className="p-2 border">
            Short: +{weapon.accuracy.short}, Long: +{weapon.accuracy.long}
        </td>
        <td className="p-2 border">{weapon.strength}</td>
        <td className="p-2 border">{weapon.armorPiercing}</td>
        <td className="p-2 border">{weapon.damage}</td>
        <td className="p-2 border">{weapon.ammunition}</td>
        <td>
            {weapon.rules.join(', ')}
        </td>
        {actions && <td className="p-2 border">{actions}</td>}
    </tr>

    if (headers) return (
        <table className="w-full border-collapse">
            <thead>
                <td>
                    {name && <td className="font-bold p-2 border">Name</td>}
                    {credits && <td className="font-bold p-2 border">Cost</td>} 
                    <td className="font-bold p-2 border">Range</td>
                    <td className="font-bold p-2 border">Accuracy</td>
                    <td className="font-bold p-2 border">Strength</td>
                    <td className="font-bold p-2 border">Armor Piercing</td>
                    <td className="font-bold p-2 border">Damage</td>
                    <td className="font-bold p-2 border">Ammunition</td>
                    <td className="font-bold p-2 border">Special Rules</td>
                    {actions && <td className="font-bold p-2 border">Actions</td>}
                </td>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
    )

    return row;
}