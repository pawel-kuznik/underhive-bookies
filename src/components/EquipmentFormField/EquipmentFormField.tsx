import { Button, FormFieldLayout } from "@pawel-kuznik/react-faceplate";
import type { Equipment } from "../../types/equipment";
import { useState } from "react";
import { List } from "./List";
import { EquipmentPicker } from "../EquipmentPicker";

export interface EquipmentFormFieldProps {
    label: string;
    name?: string;
    onPick?: (equipment: Equipment) => void;
}

export function EquipmentFormField({ label, name, onPick }: EquipmentFormFieldProps) {
    const [selected, setSelected] = useState<Equipment[]>([]);
    const [picking, setPicking] = useState<boolean>(false);

    const handlePick = (equipment: Equipment) => {
        if (selected.find(e => e.id === equipment.id)) {
            return;
        }

        setSelected([...selected, equipment]);
        onPick?.(equipment);
    }

    const handleRemove = (id: string) => {
        setSelected(selected.filter(e => e.id !== id));
    }

    return (
        <FormFieldLayout label={label}>
            <input type="hidden" name={name} value={selected.map(e => e.id).join(',')} />
            <List equipment={selected} onRemove={handleRemove} />
            <Button label="Pick" onClick={() => setPicking(!picking)} />
            {picking && <EquipmentPicker onPick={handlePick} />}
        </FormFieldLayout>
    )
} 