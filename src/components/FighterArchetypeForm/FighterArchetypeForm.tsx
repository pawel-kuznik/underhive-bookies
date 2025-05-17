import { BasicForm, Button, FormField, SelectInput } from "@pawel-kuznik/react-faceplate";
import type { FighterArchetype } from '../../types/fighterArchetype';
import type { House } from '../../types/house';
import type { Rule } from '../../types/rule';
import { RuleFormField } from '../RuleFormField/RuleFormField';
import { useState, useRef } from 'react';
import { createFighterArchetype } from "../../actions/createFighterArchetype";
import { getHouse } from "../../actions/getHouse";
import { useFighterArchetypeStore } from "../../store/fighterArchetypeStore";

interface FighterArchetypeFormProps {
  houses: House[];
  rules: Rule[];
  onSubmit: (name: string, rules: string[], wargear: string[], houseId: string) => void;
  initialData?: FighterArchetype;
  onCancel?: () => void;
}

const FighterArchetypeForm: React.FC<FighterArchetypeFormProps> = ({
  houses,
  initialData,
  onCancel,
}) => {
  const [wargear, setWargear] = useState<string[]>(initialData?.wargear || []);
  const [newWargear, setNewWargear] = useState('');
  const houseIdRef = useRef(initialData?.houseId || '');

  const { insertArchetype } = useFighterArchetypeStore();

  const handleAddWargear = () => {
    if (newWargear.trim()) {
      setWargear([...wargear, newWargear.trim()]);
      setNewWargear('');
    }
  };

  const handleRemoveWargear = (index: number) => {
    setWargear(wargear.filter((_, i) => i !== index));
  };

  const handleSubmit = (data: any) => {

    // get the inputs for the submit
    const house = getHouse(data.houseId);
    const rules = data.rules ? data.rules.split(',').filter(Boolean) : [];

    // create the archetype
    const archetype = createFighterArchetype(data.name.trim(), house);
    archetype.rules = rules;
    
    insertArchetype(archetype);
  };

  return (
    <BasicForm onSubmit={handleSubmit}>
      <FormField
        type="text"
        label="Name"
        name="name"
        defaultValue={initialData?.name}
      />
      
      <SelectInput
        name="houseId"
        options={houses.map(house => house.id)}
        labels={houses.map(house => house.name)}
        valueRef={houseIdRef}
      />

      <RuleFormField
        label="Rules"
        name="rules"
      />

      <div className="wargear-section">
        <h3>Wargear</h3>
        <div className="add-item-form">
          <input
            type="text"
            value={newWargear}
            onChange={(e) => setNewWargear(e.target.value)}
            placeholder="Add wargear"
            className="wargear-input"
          />
          <Button onClick={handleAddWargear} label="Add Wargear" />
        </div>
        <ul className="items-list">
          {wargear.map((item, index) => (
            <li key={index} className="item">
              {item}
              <Button onClick={() => handleRemoveWargear(index)} label="×" />
            </li>
          ))}
        </ul>
      </div>

      <div className="form-actions">
        <Button submit label={initialData ? 'Save Changes' : 'Add Archetype'} />
        {onCancel && (
          <Button onClick={onCancel} label="Cancel" />
        )}
      </div>
    </BasicForm>
  );
};

export default FighterArchetypeForm;
