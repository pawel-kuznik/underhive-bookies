import { Button, ButtonLine, DataTable } from '@pawel-kuznik/react-faceplate';
import type { Weapon } from '../../types/weapon';

export interface WeaponListProps {
    
    /**
     *  The list of weapons to display.
     */
    weapons: Weapon[];

    /**
     *  A callback to edit a weapon.
     */
    onEdit: (weapon: Weapon) => void;

    /**
     *  A callback to delete a weapon.
     */
    onDelete: (id: string) => void;
}

/**
 *  The component that displays a list of weapons.
 */
export function WeaponList({ weapons, onEdit, onDelete }: WeaponListProps) {

    const columns = [
        "Name",
        "Cost",
        "Rules",
        "Range",
        "Accuracy",
        "Strength",
        "AP",
        "D",
        "Ammo",
        "Actions",
    ];

    const data = weapons.map((weapon) => ([
        weapon.name,
        weapon.cost,
        weapon.rules.join(', '),
        `${weapon.range.short}/${weapon.range.long}`,
        `${weapon.accuracy.short}/${weapon.accuracy.long}`,
        weapon.strength,
        weapon.armorPiercing,
        weapon.damage,
        weapon.ammunition,
        (<ButtonLine>
            <Button label="Edit" onClick={() => onEdit(weapon)}/>
            <Button label="Delete" onClick={() => onDelete(weapon.id)}/>
        </ButtonLine>)
    ]));

    return <DataTable data={data} columns={columns} />
} 