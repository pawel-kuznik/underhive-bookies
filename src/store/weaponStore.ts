import { create } from 'zustand';
import type { Weapon } from '../types/weapon';
import { initialWeapons } from './initialWeapons';

interface WeaponStore {
  weapons: Weapon[];
  addWeapon: (weapon: Weapon) => void;
  removeWeapon: (id: string) => void;
  storeWeapon: (weapon: Weapon) => void;
  updateWeapon: (weapon: Weapon) => void;
  findWeaponById: (id: string) => Weapon | undefined;
  findWeaponByName: (name: string) => Weapon | undefined;
}

export const useWeaponStore = create<WeaponStore>((set, get) => ({
  weapons: initialWeapons,

  addWeapon: (weapon: Weapon) => {
    set((state) => ({
      weapons: [...state.weapons, weapon],
    }));
  },

  removeWeapon: (id: string) => {
    set((state) => ({
      weapons: state.weapons.filter((weapon) => weapon.id !== id),
    }));
  },

  updateWeapon: (weapon: Weapon) => {
    set((state) => ({
      weapons: state.weapons.map((w) => (w.id === weapon.id ? weapon : w)),
    }));
  },

  storeWeapon: (weapon: Weapon) => {
    set((state) => {

      const existing = state.weapons.find((w) => w.id === weapon.id);

      if (existing) {
        return {
          weapons: state.weapons.map((w) => (w.id === weapon.id ? weapon : w)),
        }
      }
      else {
        return {
          weapons: [...state.weapons, weapon],
        }
      }
    });
  },

  findWeaponById: (id: string) => {
    return get().weapons.find((weapon) => weapon.id === id);
  },

  findWeaponByName: (name: string) => {
    return get().weapons.find((weapon) => weapon.name === name);
  },
})); 