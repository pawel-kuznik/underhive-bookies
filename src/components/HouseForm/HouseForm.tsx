import { BasicForm, FormField, Button, ButtonLine } from '@pawel-kuznik/react-faceplate';
import type { House } from '../../types/house';
import { useTranslation } from 'react-i18next';

export interface HouseFormProps {
    initialData?: House;
    onSubmit: (data: House) => void;
    onCancel: () => void;
}

/**
 *  A form to create or edit a house.
 */
export function HouseForm({ initialData, onSubmit, onCancel }: HouseFormProps) {
    const { t } = useTranslation();

    const handleSubmit = (data: any) => {
        if (!data.name.trim() || !data.reference.trim()) {
            return;
        }

        onSubmit({
            id: initialData?.id ?? crypto.randomUUID(),
            name: data.name.trim(),
            reference: data.reference.trim()
        });
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            {initialData && (
                <input type="hidden" name="id" value={initialData.id} />
            )}

            <FormField
                type="text"
                name="name"
                label={t('house.name')}
                defaultValue={initialData?.name}
            />

            <FormField
                type="text"
                name="reference"
                label={t('house.reference')}
                defaultValue={initialData?.reference}
            />

            <ButtonLine>
                <Button onClick={onCancel} label={t('common.cancel')} />
                <Button submit label={initialData ? t('house.edit') : t('house.create')} />
            </ButtonLine>
        </BasicForm>
    );
}