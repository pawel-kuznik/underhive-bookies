import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate";
import type { FighterArchetype } from '../../types/fighterArchetype';
import type { House } from '../../types/house';
import type { Rule } from '../../types/rule';
import { RuleFormField } from '../RuleFormField/RuleFormField';
import { createFighterArchetype } from "../../actions/createFighterArchetype";
import { getHouse } from "../../actions/getHouse";
import { useFighterArchetypeStore } from "../../store/fighterArchetypeStore";
import { EquipmentFormField } from "../EquipmentFormField/EquipmentFormField";
import { WeaponFormField } from "../WeaponFormField/WeaponFormField";
import { HouseFormField } from "../HouseFormField/HouseFormField";

interface FighterArchetypeFormProps {
  onSubmit?: () => void;
  initialData?: FighterArchetype;
  onCancel?: () => void;
}

const FighterArchetypeForm: React.FC<FighterArchetypeFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {

  const { insertArchetype } = useFighterArchetypeStore();

  const handleSubmit = (data: any) => {

    // get the inputs for the submit
    const house = getHouse(data.houseId);
    const rules = data.rules ? data.rules.split(',').filter(Boolean) : [];
    const weapons = data.weapons ? data.weapons.split(',').filter(Boolean) : [];
    const equipment = data.equipment ? data.equipment.split(',').filter(Boolean) : [];

    // create the archetype
    const archetype = createFighterArchetype(data.name.trim(), house);
    archetype.rules = rules;
    archetype.weapons = weapons;
    archetype.equipment = equipment;

    insertArchetype(archetype);
    onSubmit?.();
  };

  return (
    <BasicForm onSubmit={handleSubmit}>
      <FormField
        type="text"
        label="Name"
        name="name"
        defaultValue={initialData?.name}
      />

      <HouseFormField
        name="houseId"
        label="House"
      />

      <RuleFormField
        label="Rules"
        name="rules"
      />

      <EquipmentFormField
        label="Equipment"
        name="equipmnet"
      />

      <WeaponFormField
        label="Weapons"
        name="weapons"
      />

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
