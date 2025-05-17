import React, { useState } from 'react';
import { useWeaponStore } from '../store/weaponStore';
import type { Weapon } from '../types/weapon';

interface WeaponFormData {
  name: string;
  cost: number;
  rules: string;
  rangeShort: number;
  rangeLong: number;
  accuracyShort: number;
  accuracyLong: number;
  strength: number;
  armorPiercing: number;
  damage: number;
  ammunition: number;
}

const Weapons: React.FC = () => {
  const { weapons, addWeapon, removeWeapon, updateWeapon } = useWeaponStore();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<WeaponFormData>({
    name: '',
    cost: 0,
    rules: '',
    rangeShort: 0,
    rangeLong: 0,
    accuracyShort: 0,
    accuracyLong: 0,
    strength: 0,
    armorPiercing: 0,
    damage: 0,
    ammunition: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rules' ? value : Number(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rules = formData.rules.split(',').map(rule => rule.trim());
    
    if (editingId) {
      const weapon = weapons.find(w => w.id === editingId);
      if (weapon) {
        updateWeapon({
          ...weapon,
          name: formData.name,
          cost: formData.cost,
          rules,
          range: { short: formData.rangeShort, long: formData.rangeLong },
          accuracy: { short: formData.accuracyShort, long: formData.accuracyLong },
          strength: formData.strength,
          armorPiercing: formData.armorPiercing,
          damage: formData.damage,
          ammunition: formData.ammunition,
        });
      }
      setEditingId(null);
    } else {
      addWeapon(
        formData.name,
        formData.cost,
        rules,
        { short: formData.rangeShort, long: formData.rangeLong },
        { short: formData.accuracyShort, long: formData.accuracyLong },
        formData.strength,
        formData.armorPiercing,
        formData.damage,
        formData.ammunition
      );
    }

    setFormData({
      name: '',
      cost: 0,
      rules: '',
      rangeShort: 0,
      rangeLong: 0,
      accuracyShort: 0,
      accuracyLong: 0,
      strength: 0,
      armorPiercing: 0,
      damage: 0,
      ammunition: 0,
    });
    setIsAdding(false);
  };

  const handleEdit = (weapon: Weapon) => {
    setEditingId(weapon.id);
    setFormData({
      name: weapon.name,
      cost: weapon.cost,
      rules: weapon.rules.join(', '),
      rangeShort: weapon.range.short,
      rangeLong: weapon.range.long,
      accuracyShort: weapon.accuracy.short,
      accuracyLong: weapon.accuracy.long,
      strength: weapon.strength,
      armorPiercing: weapon.armorPiercing,
      damage: weapon.damage,
      ammunition: weapon.ammunition,
    });
    setIsAdding(true);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => {
            setIsAdding(true);
            setEditingId(null);
            setFormData({
              name: '',
              cost: 0,
              rules: '',
              rangeShort: 0,
              rangeLong: 0,
              accuracyShort: 0,
              accuracyLong: 0,
              strength: 0,
              armorPiercing: 0,
              damage: 0,
              ammunition: 0,
            });
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Weapon
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 p-4 border rounded">
          <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Weapon' : 'Add New Weapon'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Cost:</label>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Rules (comma-separated):</label>
              <input
                type="text"
                name="rules"
                value={formData.rules}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Range Short:</label>
              <input
                type="number"
                name="rangeShort"
                value={formData.rangeShort}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Range Long:</label>
              <input
                type="number"
                name="rangeLong"
                value={formData.rangeLong}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Accuracy Short:</label>
              <input
                type="number"
                name="accuracyShort"
                value={formData.accuracyShort}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Accuracy Long:</label>
              <input
                type="number"
                name="accuracyLong"
                value={formData.accuracyLong}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Strength:</label>
              <input
                type="number"
                name="strength"
                value={formData.strength}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Armor Piercing:</label>
              <input
                type="number"
                name="armorPiercing"
                value={formData.armorPiercing}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Damage:</label>
              <input
                type="number"
                name="damage"
                value={formData.damage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Ammunition:</label>
              <input
                type="number"
                name="ammunition"
                value={formData.ammunition}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="col-span-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                {editingId ? 'Update' : 'Add'} Weapon
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Cost</th>
              <th className="px-4 py-2 border">Rules</th>
              <th className="px-4 py-2 border">Range</th>
              <th className="px-4 py-2 border">Accuracy</th>
              <th className="px-4 py-2 border">S</th>
              <th className="px-4 py-2 border">AP</th>
              <th className="px-4 py-2 border">D</th>
              <th className="px-4 py-2 border">Ammo</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {weapons.map((weapon) => (
              <tr key={weapon.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{weapon.name}</td>
                <td className="px-4 py-2 border">{weapon.cost}</td>
                <td className="px-4 py-2 border">{weapon.rules.join(', ')}</td>
                <td className="px-4 py-2 border">{weapon.range.short}/{weapon.range.long}</td>
                <td className="px-4 py-2 border">{weapon.accuracy.short}/{weapon.accuracy.long}</td>
                <td className="px-4 py-2 border">{weapon.strength}</td>
                <td className="px-4 py-2 border">{weapon.armorPiercing}</td>
                <td className="px-4 py-2 border">{weapon.damage}</td>
                <td className="px-4 py-2 border">{weapon.ammunition}</td>
                <td className="px-4 py-2 border">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(weapon)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeWeapon(weapon.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Weapons; 