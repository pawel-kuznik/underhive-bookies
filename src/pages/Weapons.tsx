import { useWeaponStore } from '../store/weaponStore';
import type { Weapon } from '../types/weapon';
import { WeaponList } from '../components/WeaponList/WeaponList';
import { useNavigate } from 'react-router-dom';

/**
 *  This is a page component that allows for management data of weapons. 
 */
export function Weapons() {

  const { weapons, removeWeapon } = useWeaponStore();
  const navigate = useNavigate();

  const handleEdit = (weapon: Weapon) => {
    navigate(`/codex/weapons/${weapon.id}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => {
            navigate("/codex/weapons/new");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Weapon
        </button>
      </div>

      <WeaponList
        weapons={weapons}
        onEdit={handleEdit}
        onDelete={removeWeapon}
      />
    </div>
  );
}
