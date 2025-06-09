import { ButtonLine, ContentBox } from "@pawel-kuznik/react-faceplate";
import type { Gang } from "../../types/gang";
import { DescriptiveTitle } from "../DescriptiveTitle/DescriptiveTitle";
import { Counter } from "../Counter";
import { calculateGangValue } from "../../actions/calculateGangValue";
import { useHouse } from "../../utils/useHouse";
import type { ReactNode } from "react";

export interface GangCardProps {
    gang: Gang;
    actions: ReactNode;
    onRemoveGang?: (id: string) => void;
}

export function GangCard({ gang, actions }: GangCardProps) {
    const house = useHouse(gang.house);
    
    return (
        <ContentBox>
            <DescriptiveTitle title={gang.name} description={house.name}>
                <ButtonLine>
                    <Counter value={calculateGangValue(gang)} label="Value"/>
                    <Counter value={gang.members.length} label="Members"/>
                    {actions}
                </ButtonLine>
            </DescriptiveTitle>
        </ContentBox>
    );
} 