import { useNavigate } from 'react-router-dom';
import { BasicForm, Button, ButtonLine, FormField } from "@pawel-kuznik/react-faceplate";
import { HouseFormField } from '../components/HouseFormField/HouseFormField';
import { useGangStore } from '../store/gangStore';
import { useTranslation } from 'react-i18next';

/**
 *  A page to create a new gang. 
 */
export function CreateGang() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { createGang, findGangByName, updateGang } = useGangStore();

    const handleSubmit = (data: any) => {
        if (!data.name.trim()) return;

        createGang(data.name.trim());
        const gang = findGangByName(data.name.trim());

        if (gang) {
            updateGang({
                ...gang,
                house: data.houseId,
                credits: parseInt(data.credits) || 0
            });

            navigate(`/hideout/gang/${gang.id}`);
        }
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <FormField
                type="text"
                label={t('createGang.name')}
                name="name"
            />

            <HouseFormField
                name="houseId"
                label={t('createGang.house')}
            />

            <FormField
                type="number"
                label={t(t('createGang.credits'))}
                name="credits"
                defaultValue="1000"
            />

            <ButtonLine>
                <Button submit label={t("createGang.create")} />
                <Button onClick={() => navigate('/hideout/gangs')} label={t("createGang.cancel")} />
            </ButtonLine>
        </BasicForm>
    );
};
