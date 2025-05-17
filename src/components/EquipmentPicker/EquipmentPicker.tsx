import { useEquipmentStore } from "../../store/equipmentStore";
import type { Equipment } from "../../types/equipment";


export interface EquipmentPickerProps {
    onPick?: (equipment: Equipment) => void;
}

export function EquipmentPicker({ onPick }: EquipmentPickerProps) {
    const { equipment } = useEquipmentStore();

    return (
        <div>
            {equipment.map((item) => (
                <div key={item.id} onClick={() => onPick?.(item)}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
} 