import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFighterArchetypeStore } from '../store/fighterArchetypeStore';
import { useHouseStore } from '../store/houseStore';
import { useRuleStore } from '../store/ruleStore';
import FighterArchetypeForm from '../components/FighterArchetypeForm/FighterArchetypeForm';

const FighterArchetypePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { archetypes, addArchetype, updateArchetype } = useFighterArchetypeStore();
  const { houses } = useHouseStore();
  const { rules } = useRuleStore();

  const archetype = id ? archetypes.find(a => a.id === id) : undefined;

  const handleSubmit = (name: string, rules: string[], wargear: string[], houseId: string) => {
    if (archetype) {
      updateArchetype({
        ...archetype,
        name,
        rules,
        wargear,
        houseId,
      });
    } else {
      addArchetype(name, rules, wargear, houseId);
    }
    navigate('/codex/fighter-archetypes');
  };

  const handleCancel = () => {
    navigate('/codex/fighter-archetypes');
  };

  return (
    <div className="fighter-archetype-form-page">
      <h1>{archetype ? 'Edit Fighter Archetype' : 'Create New Fighter Archetype'}</h1>
      <FighterArchetypeForm
        houses={houses}
        rules={rules}
        onSubmit={handleSubmit}
        initialData={archetype}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default FighterArchetypePage; 