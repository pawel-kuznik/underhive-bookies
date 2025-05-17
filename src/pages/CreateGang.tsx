import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate";
import { HouseFormField } from '../components/HouseFormField/HouseFormField';
import { useGangStore } from '../store/gangStore';

const CreateGang: React.FC = () => {
    const navigate = useNavigate();
    const { createGang, findGangByName, updateGang } = useGangStore();

    const handleSubmit = (data: any) => {
        if (!data.name.trim()) return;

        createGang(data.name.trim());
        const gang = findGangByName(data.name.trim());

        if (gang) {
            const updatedGang = {
                ...gang,
                house: data.houseId,
                credits: parseInt(data.credits) || 0
            };
            updateGang(updatedGang);
        }

        navigate('/hideout/gangs');
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <FormField
                type="text"
                label="Gang Name"
                name="name"
            />

            <HouseFormField
                name="houseId"
                label="House"
            />

            <FormField
                type="number"
                label="Starting Credits"
                name="credits"
                defaultValue="1000"
            />

            <div className="form-actions">
                <Button submit label="Create Gang" />
                <Button onClick={() => navigate('/hideout/gangs')} label="Cancel" />
            </div>
        </BasicForm>
    );
};

export default CreateGang; 