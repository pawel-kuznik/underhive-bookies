import { useGangStore } from "../store/gangStore";
import type { Gang } from "../types/gang";

/**
 *  A hook to get access to a specific gang.
 */
export function useGang(id: string | Gang) {

    const actualId = typeof (id) === "string" ? id : id.id;
    const { findGangById } = useGangStore();

    const found = findGangById(actualId);

    if (!found) throw Error("Gang not found");

    return found;
}