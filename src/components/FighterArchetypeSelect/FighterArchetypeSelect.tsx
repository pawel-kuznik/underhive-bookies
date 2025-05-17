import { SelectInput } from '@pawel-kuznik/react-faceplate';
import { useFighterArchetypeStore } from '../../store/fighterArchetypeStore';

export interface FighterArchetypeSelectProps {
    name: string
    houseId?: string;
}

/**
 *  A component that allows user to select a fighter archetype.
 */
export function FighterArchetypeSelect({ name, houseId }: FighterArchetypeSelectProps) {
    const archetypes = useFighterArchetypeStore(state => state.archetypes);

    const allowedArchetypes = houseId ? archetypes.filter(archetype => archetype.houseId === houseId) : archetypes;

    return (
        <SelectInput
            name={name}
            options={allowedArchetypes.map(archetype => archetype.id)}
            labels={allowedArchetypes.map(archetype => archetype.name)}
        />
    );
}