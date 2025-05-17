import { create } from 'zustand';
import type { House } from '../types/house';
import { v4 as uuidv4 } from 'uuid';
import { initialHouses } from './initialHouses';

interface HouseStore {
  houses: House[];
  addHouse: (name: string, reference: string) => void;
  removeHouse: (id: string) => void;
  updateHouse: (house: House) => void;
  findHouseById: (id: string) => House | undefined;
}

export const useHouseStore = create<HouseStore>((set, get) => ({
  houses: initialHouses,

  addHouse: (name: string, reference: string) => {
    const newHouse: House = {
      id: uuidv4(),
      name,
      reference,
    };

    set((state) => ({
      houses: [...state.houses, newHouse],
    }));
  },

  removeHouse: (id: string) => {
    set((state) => ({
      houses: state.houses.filter((house) => house.id !== id),
    }));
  },

  updateHouse: (house: House) => {
    set((state) => ({
      houses: state.houses.map((h) => (h.id === house.id ? house : h)),
    }));
  },

  findHouseById: (id: string) => {
    return get().houses.find((house) => house.id === id);
  },
})); 