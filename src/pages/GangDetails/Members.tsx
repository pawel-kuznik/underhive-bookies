import { FighterCard } from "../../components/FighterCard";
import { useGangStore } from "../../store/gangStore";
import type { Gang } from "../../types/gang"

export interface MembersProps {
    gang: Gang
}

export function Members({ gang }: MembersProps) {

    const { updateGang } = useGangStore();

    const handleRemoveMember = (memberId: string) => {
        const updatedGang = {
            ...gang,
            members: gang.members.filter(m => m.id !== memberId),
        };
        updateGang(updatedGang);
    };

    return (
        <div>
            {gang.members.map((member) => (
                <FighterCard
                    key={member.id}
                    fighter={member}
                    onRemoveMember={handleRemoveMember}
                />
            ))}
        </div>
    )
}