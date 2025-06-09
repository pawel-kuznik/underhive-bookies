import type { Weapon } from "../types/weapon";
import { extractPropAs } from "../utils/extractPropAs";
import { createWeapon } from "./createWeapon";

/**
 *  A function to parse a weapon from an object. Useful when creating a weapon
 *  instance from a form.
 */
export function parseWeapon(input: object) : Weapon {

    if (!('name' in input) || !input.name) throw new Error("Name is required");

    const weapon = createWeapon(extractPropAs(input, "name", String));

    // If the id is provided, use it cause it might be that we want to parse over an existing weapon.
    if ('id' in input) weapon.id = extractPropAs(input, "id", String);

    if ('cost' in input) weapon.cost = extractPropAs(input, "cost", Number);
    if ('rangeShort' in input) weapon.range.short = extractPropAs(input, "rangeShort", Number);
    if ('rangeLong' in input) weapon.range.long = extractPropAs(input, "rangeLong", Number);
    if ('accuracyShort' in input) weapon.accuracy.short = extractPropAs(input, "accuracyShort", Number);
    if ('accuracyLong' in input) weapon.accuracy.long = extractPropAs(input, "accuracyLong", Number);
    if ('strength' in input) weapon.strength = extractPropAs(input, "strength", Number);
    if ('armorPiercing' in input) weapon.armorPiercing = extractPropAs(input, "armorPiercing", Number);

    if ('rules' in input) {
        const rules = extractPropAs(input, "rules", String);
        weapon.rules = rules.split(",").map(rule => rule.trim());
    }

    return weapon;
}