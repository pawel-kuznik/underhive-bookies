import type { Weapon } from "../../types/weapon";
import { Button } from "@pawel-kuznik/react-faceplate";

interface ListProps {
    weapons: Weapon[];
    onRemove: (id: string) => void;
}

export function List({ weapons, onRemove }: ListProps) {
    return (
        <div>
            {weapons.map((weapon) => (
                <div key={weapon.id}>
                    {weapon.name}
                    <Button onClick={() => onRemove(weapon.id)} label="×" />
                </div>
            ))}
        </div>
    )
} 