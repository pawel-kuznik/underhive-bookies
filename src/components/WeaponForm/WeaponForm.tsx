import { parseWeapon } from '../../actions/parseWeapon';
import type { Weapon } from '../../types/weapon';
import { BasicForm, FormField, Button, ButtonLine } from '@pawel-kuznik/react-faceplate';

export interface WeaponFormProps {
    initialData?: Weapon;
    onSubmit: (data: Weapon) => void;
    onCancel: () => void;
}

/**
 *  A form to create or edit a weapon.
 */
export function WeaponForm({ initialData, onSubmit, onCancel }: WeaponFormProps) {

    const handleSubmit = (data: any) => {
        onSubmit(parseWeapon(data));
    };

    return (

        <BasicForm onSubmit={handleSubmit}>

            {initialData && (
                <input type="hidden" name="id" value={initialData.id} />
            )}

            <FormField
                type="text"
                name="name"
                label="Name"
                defaultValue={initialData?.name}
            />

            <FormField
                type="number"
                name="cost"
                label="Cost"
                defaultValue={initialData?.cost}
            />

            <FormField
                type="text"
                name="rules"
                label="Rules (comma-separated)"
                defaultValue={initialData?.rules.join(', ')}
            />

            <FormField
                type="number"
                name="rangeShort"
                label="Range Short"
                defaultValue={initialData?.range.short}
            />

            <FormField
                type="number"
                name="rangeLong"
                label="Range Long"
                defaultValue={initialData?.range.long}
            />

            <FormField
                type="number"
                name="accuracyShort"
                label="Accuracy Short"
                defaultValue={initialData?.accuracy.short}
            />

            <FormField
                type="number"
                name="accuracyLong"
                label="Accuracy Long"
                defaultValue={initialData?.accuracy.long}
            />

            <FormField
                type="number"
                name="strength"
                label="Strength"
                defaultValue={initialData?.strength}
            />

            <FormField
                type="number"
                name="armorPiercing"
                label="Armor Piercing"
                defaultValue={initialData?.armorPiercing}
            />

            <FormField
                type="number"
                name="damage"
                label="Damage"
                defaultValue={initialData?.damage}
            />

            <FormField
                type="number"
                name="ammunition"
                label="Ammunition"
                defaultValue={initialData?.ammunition}
            />

            <ButtonLine>
                <Button onClick={onCancel} label="Cancel" />
                <Button submit label={initialData ? 'Update' : 'Add'} />
            </ButtonLine>
        </BasicForm>
    );
} 