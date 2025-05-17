import type { Equipment } from "../../types/equipment";
import { Button } from "@pawel-kuznik/react-faceplate";

interface ListProps {
    equipment: Equipment[];
    onRemove: (id: string) => void;
}

export function List({ equipment, onRemove }: ListProps) {
    return (
        <div>
            {equipment.map((item) => (
                <div key={item.id}>
                    {item.name}
                    <Button onClick={() => onRemove(item.id)} label="×" />
                </div>
            ))}
        </div>
    )
} 