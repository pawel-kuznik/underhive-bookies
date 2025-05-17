import { ContentBox } from "@pawel-kuznik/react-faceplate";
import type { Fighter } from "../../types/gang";
import { FighterStats } from "../FighterStats";
import { useFighterArchetype } from "../../utils/useFighterArchetype";
import { calculateFighterValue } from "../../actions/calculateFighterValue";

export interface FighterCardProps {
    fighter: Fighter;
    onRemoveMember?: (id: string) => void;
}

export function FighterCard({ fighter, onRemoveMember }: FighterCardProps) {

    const archetype = useFighterArchetype(fighter.archetypeId);

    return (
        <ContentBox>
            <h2>
                Name: {fighter.name}
            </h2>
            <p>
                Archetype: {archetype.name}
            </p>
            <p>
                Value: {calculateFighterValue(fighter)}
            </p>
            {onRemoveMember && (
                <button
                    className="remove-member-button"
                    onClick={() => onRemoveMember?.(fighter.id)}
                >
                    Remove Member
                </button>
            )}
            <FighterStats fighter={fighter} />

        </ContentBox>
    )
}