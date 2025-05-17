import type { Roster } from "../types/roster";
import { calculateFighterValue } from "./calculateFighterValue";

export function calculateRosterValue(roster: Roster) {
    let total = 0;
    
    roster.fighters.forEach(fighter => {
        total += calculateFighterValue(fighter);
    });

    return total;
}