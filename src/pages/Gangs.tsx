import React, { useState } from 'react';
import { useGangStore } from '../store/gangStore';
import { useNavigate } from 'react-router-dom';

const Gangs: React.FC = () => {
  const { gangs, createGang, removeGang } = useGangStore();
  const [newGangName, setNewGangName] = useState('');
  const navigate = useNavigate();

  const handleCreateGang = () => {
    if (newGangName.trim()) {
      createGang(newGangName.trim());
      setNewGangName('');
    }
  };

  return (
    <div>
      <h1>Gangs</h1>
      <div className="gangs-container">
        <div className="gangs-header">
          <input
            type="text"
            value={newGangName}
            onChange={(e) => setNewGangName(e.target.value)}
            placeholder="Enter gang name"
            className="gang-name-input"
          />
          <button 
            className="add-gang-button"
            onClick={handleCreateGang}
            disabled={!newGangName.trim()}
          >
            Create New Gang
          </button>
        </div>
        <div className="gangs-list">
          {gangs.length === 0 ? (
            <p>No gangs created yet. Create your first gang!</p>
          ) : (
            <div className="gangs-grid">
              {gangs.map((gang) => (
                <div key={gang.id} className="gang-card">
                  <h3>{gang.name}</h3>
                  <p>House: {gang.house || 'Not set'}</p>
                  <p>Members: {gang.members.length}</p>
                  <p>Credits: {gang.credits}</p>
                  <p>Reputation: {gang.reputation}</p>
                  <div className="gang-card-actions">
                    <button
                      className="edit-gang-button"
                      onClick={() => navigate(`/hideout/gang/${gang.id}`)}
                    >
                      Edit Gang
                    </button>
                    <button
                      className="delete-gang-button"
                      onClick={() => removeGang(gang.id)}
                    >
                      Delete Gang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gangs; 