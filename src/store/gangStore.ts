import { create } from 'zustand';
import type { Gang } from '../types/gang';
import { v4 as uuidv4 } from 'uuid';

interface GangStore {
  gangs: Gang[];
  createGang: (name: string) => void;
  removeGang: (id: string) => void;
  updateGang: (gang: Gang) => void;
  findGangByName: (name: string) => Gang | undefined;
  findGangById: (id: string) => Gang | undefined;
}

export const useGangStore = create<GangStore>((set, get) => ({
  gangs: [],

  createGang: (name: string) => {
    const newGang: Gang = {
      id: uuidv4(),
      name,
      house: '',
      members: [],
      vehicles: [],
      stash: [],
      reputation: 0,
      credits: 0,
      notes: [],
    };

    set((state) => ({
      gangs: [...state.gangs, newGang],
    }));
  },

  removeGang: (id: string) => {
    set((state) => ({
      gangs: state.gangs.filter((gang) => gang.id !== id),
    }));
  },

  updateGang: (gang: Gang) => {
    set((state) => ({
      gangs: state.gangs.map((g) => (g.id === gang.id ? gang : g)),
    }));
  },

  findGangByName: (name: string) => {
    return get().gangs.find((gang) => gang.name === name);
  },

  findGangById: (id: string) => {
    return get().gangs.find((gang) => gang.id === id);
  },
})); 