import { Button, ButtonLine, ContentBox } from "@pawel-kuznik/react-faceplate";
import type { Fighter } from "../../types/gang";
import { FighterStats } from "../FighterStats";
import { useFighterArchetype } from "../../utils/useFighterArchetype";
import { calculateFighterValue } from "../../actions/calculateFighterValue";
import { DescriptiveTitle } from "../DescriptiveTitle/DescriptiveTitle";
import { Counter } from "../Counter";
import { Weapons } from "./Weapons";
import { useWeaponStore } from "../../store/weaponStore";

export interface FighterCardProps {
    fighter: Fighter;
    onRemoveMember?: (id: string) => void;
}

/**
 *  A component that displays all information about a specific fighter.
 */
export function FighterCard({ fighter, onRemoveMember }: FighterCardProps) {

    const { findWeaponById } = useWeaponStore();

    const weapons = fighter.weapons
        .map(id => findWeaponById(id))
        .filter(weapon => weapon !== undefined);

    const archetype = useFighterArchetype(fighter.archetypeId);

    const handleRemoveMember = () => {
        onRemoveMember?.(fighter.id);
    };

    return (
        <ContentBox>
            <DescriptiveTitle title={fighter.name} description={archetype.name}>
                <ButtonLine>
                    <Counter value={fighter.xp} label="EXP"/>
                    <Counter value={calculateFighterValue(fighter)} label="Value"/>
                    {onRemoveMember && <Button label="Remove" color="red" onClick={handleRemoveMember}/>}    
                </ButtonLine>
            </DescriptiveTitle>
            <FighterStats fighter={fighter} />
            <Weapons weapons={weapons} />
        </ContentBox>
    )
}