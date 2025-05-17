import type { Fighter } from "./gang";

export interface Roster {
    id: string;
    gangId: string;
    fighters: Fighter[];
}