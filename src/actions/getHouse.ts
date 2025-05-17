import { useHouseStore } from "../store/houseStore";
import type { House } from "../types/house";

export function getHouse(id: string): House {
    const house = useHouseStore.getState().findHouseById(id);
    if (!house) throw new Error(`House with id ${id} not found`);
    return house;
} 