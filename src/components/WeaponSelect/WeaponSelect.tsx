import { SelectInput } from '@pawel-kuznik/react-faceplate';
import { useWeaponStore } from '../../store/weaponStore';
import { WeaponStats } from '../WeaponStats';
import { useState, type MutableRefObject } from 'react';

export interface WeaponSelectProps {
    name?: string;
    preview?: boolean;
    valueRef?: MutableRefObject<string>;
}

/**
 * A component that allows user to select a weapon.
 */
export function WeaponSelect({ name, preview, valueRef }: WeaponSelectProps) {
    const weapons = useWeaponStore(state => state.weapons);
    const [ selected, setSelected ] = useState<string|null>()

    return (
        <>
            <SelectInput
                name={name}
                options={weapons.map(weapon => weapon.id)}
                labels={weapons.map(weapon => weapon.name)}
                onChange={setSelected}
                valueRef={valueRef}
            />
            {preview && selected && <WeaponStats weaponId={selected} />}
        </>       
    );
}