import { Button, FormFieldLayout } from "@pawel-kuznik/react-faceplate";
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
    const [picking, setPicking] = useState<boolean>(false);

    const handlePick = (weapon: Weapon) => {
        if (selected.find(w => w.id === weapon.id)) {
            return;
        }

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
            <Button label="Pick" onClick={() => setPicking(!picking)} />
            {picking && <WeaponPicker onPick={handlePick} />}
        </FormFieldLayout>
    )
} 