import { useEquipmentStore } from "../store/equipmentStore";
import type { Equipment } from "../store/equipmentStore";

export function getEquipment(id: string): Equipment {
    const equipment = useEquipmentStore.getState().findEquipmentById(id);
    if (!equipment) throw new Error(`Equipment with id ${id} not found`);
    return equipment;
} 