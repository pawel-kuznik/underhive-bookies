import type { Fighter, Gang } from "../types/gang";

export function updateGangFighter(gang: Gang, fighter: Fighter) {
    const updatedGang = {
        ...gang,
        members: gang.members.map(m => m.id === fighter.id ? fighter : m)
    };

    return updatedGang; 
}