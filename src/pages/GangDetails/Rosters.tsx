import { useTranslation } from "react-i18next";
import { useRosterStore } from "../../store/rosterStore";
import type { Gang } from "../../types/gang";
import { Button, ButtonLine } from "@pawel-kuznik/react-faceplate";

export interface RostersProps {
    gang: Gang;
}

/**
 *  A subpage that displays the rosters of a specific gang.
 */
export function Rosters({ gang }: RostersProps) {

    const { t } = useTranslation();

    const { removeRoster, findRostersByGangId } = useRosterStore();
    const gangRosters = findRostersByGangId(gang.id)

    const handleRemoveRoster = (rosterId: string) => {
        removeRoster(rosterId);
    };

    return (
        <div>
            {gangRosters.length === 0 ? (
                <p>No rosters found. Create your first roster!</p>
            ) : (
                gangRosters.map((roster) => (
                    <div key={roster.id} className="roster-card">
                        <div className="roster-info">
                            <h3>Roster {roster.id.slice(0, 8)}</h3>
                            <p>Fighters: {roster.fighters.length}</p>
                            <div className="fighter-list">
                                {roster.fighters.map((fighter) => (
                                    <span key={fighter.id} className="fighter-tag">
                                        {fighter.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <ButtonLine>
                            <Button label={t("gangDetails.rosters.remove")} onClick={() => handleRemoveRoster(roster.id)} />
                        </ButtonLine>
                    </div>
                ))
            )}
        </div>
    )
}