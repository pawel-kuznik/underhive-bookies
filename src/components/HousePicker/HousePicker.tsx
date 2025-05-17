import { SelectInput } from "@pawel-kuznik/react-faceplate";
import { useHouseStore } from "../../store/houseStore";

export interface HousePickerProps {
    name?: string;
}

export function HousePicker({ name }: HousePickerProps) {

    const { houses } = useHouseStore();

    return (
        <SelectInput
            name={name}
            options={houses.map(house => house.id)}
            labels={houses.map(house => house.name)}
        />
    )
}