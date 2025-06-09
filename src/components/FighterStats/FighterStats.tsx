import { DataTable } from '@pawel-kuznik/react-faceplate';
import type { Fighter } from '../../types/gang';
import { DiceTest } from '../DiceTest';
import { Distance } from '../Distance';

interface FighterStatsProps {
    fighter: Fighter;
}

export function FighterStats({ fighter }: FighterStatsProps) {

    const attributes = fighter.attributes;

    const columns = [
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
            <Distance value={attributes.movement} />,
            <DiceTest value={attributes.weaponSkill} />,
            <DiceTest value={attributes.ballisticSkill} />,
            attributes.strength,
            attributes.toughness,
            attributes.wounds,
            <DiceTest value={attributes.initiative} />,
            attributes.attacks,
            <DiceTest value={attributes.leadership} />,
            <DiceTest value={attributes.coolness} />,
            <DiceTest value={attributes.willPower} />,
            <DiceTest value={attributes.intellect} />
        ]
    ]

    return <DataTable columns={columns} data={data}/>
}