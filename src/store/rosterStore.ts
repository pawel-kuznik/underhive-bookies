import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { Fighter } from '../types/gang';
import type { Roster } from '../types/roster';

interface RosterStore {
  rosters: Roster[];
  createRoster: (gangId: string, fighters: Fighter[]) => void;
  removeRoster: (id: string) => void;
  updateRoster: (roster: Roster) => void;
  findRosterById: (id: string) => Roster | undefined;
  findRostersByGangId: (gangId: string) => Roster[];
}

export const useRosterStore = create<RosterStore>((set, get) => ({
  rosters: [],

  createRoster: (gangId: string, fighters: Fighter[]) => {
    const newRoster: Roster = {
      id: uuidv4(),
      gangId,
      fighters,
    };

    set((state) => ({
      rosters: [...state.rosters, newRoster],
    }));
  },

  removeRoster: (id: string) => {
    set((state) => ({
      rosters: state.rosters.filter((roster) => roster.id !== id),
    }));
  },

  updateRoster: (roster: Roster) => {
    set((state) => ({
      rosters: state.rosters.map((r) => (r.id === roster.id ? roster : r)),
    }));
  },

  findRosterById: (id: string) => {
    return get().rosters.find((roster) => roster.id === id);
  },

  findRostersByGangId: (gangId: string) => {
    return get().rosters.filter((roster) => roster.gangId === gangId);
  },
})); 