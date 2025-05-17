import React, { useState, useMemo } from 'react';
import { useHouseStore } from '../store/houseStore';
import type { House } from '../types/house';

type SortDirection = 'asc' | 'desc';

const Houses: React.FC = () => {
  const { houses, addHouse, removeHouse, updateHouse } = useHouseStore();
  const [newHouseName, setNewHouseName] = useState('');
  const [newHouseReference, setNewHouseReference] = useState('');
  const [editingHouse, setEditingHouse] = useState<House | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleAddHouse = () => {
    if (newHouseName.trim() && newHouseReference.trim()) {
      addHouse(newHouseName.trim(), newHouseReference.trim());
      setNewHouseName('');
      setNewHouseReference('');
    }
  };

  const handleEditHouse = (house: House) => {
    setEditingHouse(house);
  };

  const handleSaveEdit = () => {
    if (editingHouse && editingHouse.name.trim() && editingHouse.reference.trim()) {
      updateHouse(editingHouse);
      setEditingHouse(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingHouse(null);
  };

  const toggleSortDirection = () => {
    setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
  };

  const filteredAndSortedHouses = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    const filtered = houses.filter(house => 
      house.name.toLowerCase().includes(searchLower) || 
      house.reference.toLowerCase().includes(searchLower)
    );

    return [...filtered].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [houses, searchQuery, sortDirection]);

  return (
    <div className="houses-page">
      <h1>Houses</h1>
      
      <div className="houses-controls">
        <div className="search-box">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search houses..."
            className="search-input"
          />
        </div>
        <button 
          className="sort-button"
          onClick={toggleSortDirection}
        >
          Sort by Name {sortDirection === 'asc' ? '↑' : '↓'}
        </button>
      </div>

      <div className="add-house-section">
        <h2>Add New House</h2>
        <div className="add-house-form">
          <input
            type="text"
            value={newHouseName}
            onChange={(e) => setNewHouseName(e.target.value)}
            placeholder="House name"
            className="house-name-input"
          />
          <input
            type="text"
            value={newHouseReference}
            onChange={(e) => setNewHouseReference(e.target.value)}
            placeholder="Reference (e.g., page number, section)"
            className="house-reference-input"
          />
          <button
            className="add-house-button"
            onClick={handleAddHouse}
            disabled={!newHouseName.trim() || !newHouseReference.trim()}
          >
            Add House
          </button>
        </div>
      </div>

      <div className="houses-list">
        <h2>Existing Houses</h2>
        {filteredAndSortedHouses.length === 0 ? (
          <p>No houses found. {houses.length === 0 ? 'Add your first house!' : 'Try adjusting your search.'}</p>
        ) : (
          <div className="houses-grid">
            {filteredAndSortedHouses.map((house) => (
              <div key={house.id} className="house-card">
                {editingHouse?.id === house.id ? (
                  <div className="edit-house-form">
                    <input
                      type="text"
                      value={editingHouse.name}
                      onChange={(e) => setEditingHouse({ ...editingHouse, name: e.target.value })}
                      className="house-name-input"
                    />
                    <input
                      type="text"
                      value={editingHouse.reference}
                      onChange={(e) => setEditingHouse({ ...editingHouse, reference: e.target.value })}
                      className="house-reference-input"
                    />
                    <div className="edit-actions">
                      <button
                        className="save-edit-button"
                        onClick={handleSaveEdit}
                        disabled={!editingHouse.name.trim() || !editingHouse.reference.trim()}
                      >
                        Save
                      </button>
                      <button className="cancel-edit-button" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3>{house.name}</h3>
                    <p className="house-reference">Reference: {house.reference}</p>
                    <div className="house-actions">
                      <button
                        className="edit-house-button"
                        onClick={() => handleEditHouse(house)}
                      >
                        Edit
                      </button>
                      <button
                        className="remove-house-button"
                        onClick={() => removeHouse(house.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Houses; 