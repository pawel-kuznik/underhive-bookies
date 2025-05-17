import React from 'react';
import { useGangStore } from '../store/gangStore';
import { useNavigate } from 'react-router-dom';

const Gangs: React.FC = () => {
  const { gangs, removeGang } = useGangStore();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Gangs</h1>
      <div className="gangs-container">
        <div className="gangs-header">
          <button 
            className="create-gang-button"
            onClick={() => navigate('/hideout/gangs/create')}
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