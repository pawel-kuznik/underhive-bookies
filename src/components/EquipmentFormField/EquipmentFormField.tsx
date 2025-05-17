import { FormFieldLayout } from "@pawel-kuznik/react-faceplate";
import type { Equipment } from "../../types/equipment";
import { EquipmentPicker } from "../EquipmentPicker";
import { useState } from "react";
import { List } from "./List";

export interface EquipmentFormFieldProps {
    label: string;
    name?: string;
    onPick?: (equipment: Equipment) => void;
}

export function EquipmentFormField({ label, name, onPick }: EquipmentFormFieldProps) {
    const [selected, setSelected] = useState<Equipment[]>([]);

    const handlePick = (equipment: Equipment) => {
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
            <EquipmentPicker onPick={handlePick} />
        </FormFieldLayout>
    )
} 