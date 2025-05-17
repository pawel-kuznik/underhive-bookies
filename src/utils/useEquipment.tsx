import { useEquipmentStore } from "../store/equipmentStore";
import type { Equipment } from "../store/equipmentStore";

export function useEquipment(id: string|Equipment) {
    const { equipment } = useEquipmentStore();
    const actualId = typeof id === 'string' ? id : id.id;
    const item = equipment.find(e => e.id === actualId);
    if (!item) throw new Error(`Equipment with id ${id} not found`);
    return item;
} 