import { FormFieldLayout } from "@pawel-kuznik/react-faceplate";
import type { Weapon } from "../../types/weapon";
import { useState } from "react";
import { List } from "./List";
import { WeaponPicker } from "../WeaponPicker";

export interface WeaponFormFieldProps {
    label: string;
    name?: string;
    onPick?: (weapon: Weapon) => void;
}

export function WeaponFormField({ label, name, onPick }: WeaponFormFieldProps) {
    const [selected, setSelected] = useState<Weapon[]>([]);

    const handlePick = (weapon: Weapon) => {
        setSelected([...selected, weapon]);
        onPick?.(weapon);
    }

    const handleRemove = (id: string) => {
        setSelected(selected.filter(w => w.id !== id));
    }

    return (
        <FormFieldLayout label={label}>
            <input type="hidden" name={name} value={selected.map(w => w.id).join(',')} />
            <List weapons={selected} onRemove={handleRemove} />
            <WeaponPicker onPick={handlePick} />
        </FormFieldLayout>
    )
} 