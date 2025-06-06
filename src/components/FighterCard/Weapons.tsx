import { ContentBox, DataTable } from "@pawel-kuznik/react-faceplate";
import type { Weapon } from "../../types/weapon";

export interface WeaponsProps {
    weapons: Weapon[];
}

export function Weapons({ weapons }: WeaponsProps) {

    const columns = [
        "Name",
        "Ammo",
        "SR",
        "LR",
        "SA",
        "LA",
        "S",
        "AP",
        "D",
        "Rules",
    ]

    const data = weapons.map(weapon => [
        weapon.name,
        weapon.ammunition,
        weapon.range.short,
        weapon.range.long,
        weapon.accuracy.short,
        weapon.accuracy.long,
        weapon.strength,
        weapon.armorPiercing,
        weapon.damage,
        weapon.rules.join(", "),
    ])

    return (
        <ContentBox label="Weapons">
            <DataTable columns={columns} data={data}/>
        </ContentBox>
    )
}