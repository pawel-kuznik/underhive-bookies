import { useFighterArchetypeStore } from "../store/fighterArchetypeStore";

export function useFighterArchetype(archetypeId: string) {
    const { archetypes } = useFighterArchetypeStore();
    const found = archetypes.find((archetype) => archetype.id === archetypeId);

    if (!found) throw Error("Archetype not found");

    return found;
}

