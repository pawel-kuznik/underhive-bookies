import { useNavigate, useParams } from 'react-router-dom';
import { useFighterArchetypeStore } from '../store/fighterArchetypeStore';
import FighterArchetypeForm from '../components/FighterArchetypeForm/FighterArchetypeForm';

export function FighterArchetypePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { archetypes } = useFighterArchetypeStore();

  const archetype = id ? archetypes.find(a => a.id === id) : undefined;

  const handleSubmit = () => {

    navigate('/codex/fighter-archetypes');
  };

  const handleCancel = () => {
    navigate('/codex/fighter-archetypes');
  };

  return (
    <div className="fighter-archetype-form-page">
      <h1>{archetype ? 'Edit Fighter Archetype' : 'Create New Fighter Archetype'}</h1>
      <FighterArchetypeForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};
