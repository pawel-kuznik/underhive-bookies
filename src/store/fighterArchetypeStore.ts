import { create } from 'zustand';
import type { FighterArchetype } from '../types/fighterArchetype';
import { initialArchetypes } from './initialArchetypes';
import { createFighterArchetype } from '../actions/createFighterArchetype';
import { getHouse } from '../actions/getHouse';

interface FighterArchetypeStore {
  archetypes: FighterArchetype[];
  insertArchetype: (archetype: FighterArchetype) => void;
  addArchetype: (name: string, houseId: string) => void;
  removeArchetype: (id: string) => void;
  updateArchetype: (archetype: FighterArchetype) => void;
  findArchetypeById: (id: string) => FighterArchetype | undefined;
}

export const useFighterArchetypeStore = create<FighterArchetypeStore>((set, get) => ({
  archetypes: initialArchetypes,

  addArchetype: (name: string, houseId: string) => {
    const house = getHouse(houseId);
    const newArchetype = createFighterArchetype(name, house);

    set((state) => ({
      archetypes: [...state.archetypes, newArchetype],
    }));
  },

  insertArchetype: (archetype: FighterArchetype) => {
    set((state) => ({
      archetypes: [...state.archetypes, archetype],
    }));
  },

  removeArchetype: (id: string) => {
    set((state) => ({
      archetypes: state.archetypes.filter((archetype) => archetype.id !== id),
    }));
  },

  updateArchetype: (archetype: FighterArchetype) => {
    set((state) => ({
      archetypes: state.archetypes.map((a) => (a.id === archetype.id ? archetype : a)),
    }));
  },

  findArchetypeById: (id: string) => {
    return get().archetypes.find((archetype) => archetype.id === id);
  },
}));