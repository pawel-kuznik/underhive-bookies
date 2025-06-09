import { useFighterArchetypeStore } from "../store/fighterArchetypeStore";

export function getFighterArchetype(archetypeId: string) {
    const archetype = useFighterArchetypeStore.getState().findArchetypeById(archetypeId);
    if (!archetype) throw new Error(`Fighter archetype with id ${archetypeId} not found`);
    return archetype;
}