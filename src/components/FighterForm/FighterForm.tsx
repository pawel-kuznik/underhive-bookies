import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate"
import { createFighter } from "../../actions/createFighter";
import { useGangStore } from "../../store/gangStore";
import { useGang } from "../../utils/useGang";
import { FighterArchetypeSelect } from "../FighterArchetypeSelect";

export interface FighterFormProps {

    /**
     *  The gang ID in which the fighter should be created.
     */
    gangId: string
}

/**
 *  A form to create a new fighter in a specific gang.
 */
export function FighterForm({ gangId }: FighterFormProps) {

    const gang = useGang(gangId)
    const { updateGang } = useGangStore();

    const handleSubmit = (data: any) => {

        if (!data.name.trim()) return;

        const fighter = createFighter(data.name);
        fighter.archetypeId = data.archetype;

        const updatedGang = {
        ...gang,
        members: [...gang.members, fighter],
        };

        updateGang(updatedGang);
    }

    return (
        <BasicForm onSubmit={handleSubmit}>
            <FormField
                type="text"
                label="Name"
                name="name"
            />
            <FighterArchetypeSelect name="archetype" />
            <Button submit label="Add Member" />
        </BasicForm>
    )
}