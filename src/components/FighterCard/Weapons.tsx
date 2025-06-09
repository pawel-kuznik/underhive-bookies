import { ContentBox, DataTable } from "@pawel-kuznik/react-faceplate";
import type { Weapon } from "../../types/weapon";
import { DiceTest } from "../DiceTest";
import { Distance } from "../Distance";
import { DiceModifier } from "../DiceModifier";
import { CombinedAttribute } from "../CombinedAttribute";

export interface WeaponsProps {
    weapons: Weapon[];
}

export function Weapons({ weapons }: WeaponsProps) {

    const columns = [
        "Name",
        { label: "Range", width: "10ch" },
        { label: "Accuracy", width: "10ch" },
        "S",
        "AP",
        "D",
        "Ammo",
        "Rules",
    ]

    const data = weapons.map(weapon => [
        weapon.name,
        <CombinedAttribute>
            <Distance value={weapon.range.short} />
            <Distance value={weapon.range.long} />
        </CombinedAttribute>
        ,
        <CombinedAttribute>
            <DiceModifier value={weapon.accuracy.short} />
            <DiceModifier value={weapon.accuracy.long} />
        </CombinedAttribute>
        ,
        weapon.strength,
        <DiceModifier value={weapon.armorPiercing} invert={true} />,
        weapon.damage,
        <DiceTest value={weapon.ammunition} />,
        weapon.rules.join(", "),
    ])

    return (
        <ContentBox label="Weapons">
            <DataTable columns={columns} data={data}/>
        </ContentBox>
    )
}