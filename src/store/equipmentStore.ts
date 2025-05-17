import { create } from 'zustand';
import type { Equipment } from '../types/equipment';

interface EquipmentStore {
    equipment: Equipment[];
    addEquipment: (equipment: Equipment) => void;
    removeEquipment: (id: string) => void;
    updateEquipment: (equipment: Equipment) => void;
    findEquipmentById: (id: string) => Equipment | undefined;
}

export const useEquipmentStore = create<EquipmentStore>((set, get) => ({
    equipment: [],

    addEquipment: (equipment: Equipment) => {
        set((state) => ({
            equipment: [...state.equipment, equipment],
        }));
    },

    removeEquipment: (id: string) => {
        set((state) => ({
            equipment: state.equipment.filter((item) => item.id !== id),
        }));
    },

    updateEquipment: (equipment: Equipment) => {
        set((state) => ({
            equipment: state.equipment.map((e) => (e.id === equipment.id ? equipment : e)),
        }));
    },

    findEquipmentById: (id: string) => {
        return get().equipment.find((item) => item.id === id);
    },
})); 