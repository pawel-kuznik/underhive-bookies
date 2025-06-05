import { useHouseStore } from "../store/houseStore";
import type { House } from "../types/house";

/**
 *  A hook to get access to a specific house.
 */
export function useHouse(id: string | House) {

    const actualId = typeof (id) === "string" ? id : id.id;
    const { findHouseById } = useHouseStore();

    const found = findHouseById(actualId);

    if (!found) throw Error("House not found");

    return found;
}