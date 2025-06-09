import type { Roster } from "../types/roster";
import { calculateFighterValue } from "./calculateFighterValue";

/**
 *  Calculate the value of a roster.
 */
export function calculateRosterValue(roster: Roster) {
    let total = 0;
    
    roster.fighters.forEach(fighter => {
        total += calculateFighterValue(fighter);
    });

    return total;
}