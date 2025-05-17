import { useState } from "react";
import { useEquipmentStore } from "../../store/equipmentStore";
import type { Equipment } from "../../types/equipment";
import "./EquipmentPicker.css";

export interface EquipmentPickerProps {
    onPick?: (equipment: Equipment) => void;
}

/**
 *  This is a component that displays a list of equipment from which the user can
 *  pick one or more. When user picks an equipment, the onPick callback is called
 *  with an instance of that equipment.
 */
export function EquipmentPicker({ onPick }: EquipmentPickerProps) {
    const [keyword, setKeyword] = useState<string>("");
    const { equipment } = useEquipmentStore();
    const sortedEquipment = equipment.sort((a, b) => a.name.localeCompare(b.name));
    const filteredEquipment = sortedEquipment.filter(item => 
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <table className="equipmentpicker">
            <thead>
                <tr>
                    <th colSpan={2}>
                        <input type="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredEquipment.map((item) => (
                    <tr key={item.id} onClick={() => onPick?.(item)}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
} 