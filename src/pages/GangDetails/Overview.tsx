import { StatsList } from "@pawel-kuznik/react-faceplate";
import type { Gang } from "../../types/gang";
import { getHouse } from "../../actions/getHouse";

export interface OverviewProps {
    gang: Gang;
}

export function Overview({ gang }: OverviewProps) {
    return (
        <div>
            <StatsList alignment="left">
                <StatsList.Row label="Name">
                    {gang.name}
                </StatsList.Row>
                <StatsList.Row label="House">
                    {getHouse(gang.house).name}
                </StatsList.Row>
                <StatsList.Row label="Reputation">
                    {gang.reputation}
                </StatsList.Row>
                <StatsList.Row label="Name">
                    {gang.name}
                </StatsList.Row>
            </StatsList>
        </div>
    )
}