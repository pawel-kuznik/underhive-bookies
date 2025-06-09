import type { Gang } from "../types/gang";
import { calculateFighterValue } from "./calculateFighterValue";

/**
 *  Calculate the value of a gang.
 */
export function calculateGangValue(gang: Gang) {
    let total = gang.credits;

    gang.members.forEach(member => {
        total += calculateFighterValue(member);
    });

    return total;
}