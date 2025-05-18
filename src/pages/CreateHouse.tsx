import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate";
import { useHouseStore } from '../store/houseStore';
import type { House } from '../types/house';

const CreateHouse: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();
  const { houses, addHouse, updateHouse } = useHouseStore();
  const isEditing = !!id;

  useEffect(() => {
    if (id) {
      const house = houses.find(h => h.id === id);
      if (!house) {
        navigate('/codex/houses');
      }
    }
  }, [id, houses, navigate]);

  const handleSubmit = (data: any) => {
    if (!data.name.trim() || !data.reference.trim()) {
      return;
    }

    if (isEditing && id) {
      updateHouse({
        id,
        name: data.name.trim(),
        reference: data.reference.trim()
      });
    } else {
      addHouse(data.name.trim(), data.reference.trim());
    }

    navigate('/codex/houses');
  };

  return (
    <BasicForm onSubmit={handleSubmit}>
      <FormField
        type="text"
        label={t('house.name')}
        name="name"
      />

      <FormField
        type="text"
        label={t('house.reference')}
        name="reference"
      />

      <div className="form-actions">
        <Button submit label={isEditing ? t('house.edit') : t('house.create')} />
        <Button onClick={() => navigate('/codex/houses')} label={t('common.cancel')} />
      </div>
    </BasicForm>
  );
};

export default CreateHouse; 