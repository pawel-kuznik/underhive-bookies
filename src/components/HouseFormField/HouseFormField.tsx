import { FormFieldLayout } from "@pawel-kuznik/react-faceplate";
import { HousePicker } from "../HousePicker";

export interface HouseFormFieldProps {
    name?: string;
    label: string;
}

export function HouseFormField({ name, label }: HouseFormFieldProps) {

    return (
        <FormFieldLayout label={label}>
            <HousePicker name={name} />
        </FormFieldLayout>
    )
}