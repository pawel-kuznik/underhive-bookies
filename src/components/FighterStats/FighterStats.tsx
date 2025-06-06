import { DataTable } from '@pawel-kuznik/react-faceplate';
import type { Fighter } from '../../types/gang';

interface FighterStatsProps {
    fighter: Fighter;
}

export function FighterStats({ fighter }: FighterStatsProps) {

    const attributes = fighter.attributes;

    const columns = [
        "XP",
        "M",
        "WS",
        "BS",
        "S",
        "T",
        "W",
        "I",
        "A",
        "Ld",
        "Cl",
        "Wil",
        "Int"
    ]

    const data = [
        [
            fighter.xp,
            attributes.movement,
            attributes.weaponSkill,
            attributes.ballisticSkill,
            attributes.strength,
            attributes.toughness,
            attributes.wounds,
            attributes.initiative,
            attributes.attacks,
            attributes.leadership,
            attributes.coolness,
            attributes.willPower,
            attributes.intellect
        ]
    ]

    return <DataTable columns={columns} data={data}/>
}