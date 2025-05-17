import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGangStore } from '../store/gangStore';
import { useRosterStore } from '../store/rosterStore';

const GangRosters: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { gangs } = useGangStore();
  const { rosters, removeRoster } = useRosterStore();

  const gang = gangs.find(g => g.id === id);
  const gangRosters = rosters.filter(r => r.gangId === id);

  if (!gang) {
    return <div>Gang not found</div>;
  }

  const handleEditRoster = (rosterId: string) => {
    navigate(`/hideout/gang/${gang.id}/prepare-roster/${rosterId}`);
  };

  const handleRemoveRoster = (rosterId: string) => {
    removeRoster(rosterId);
  };

  return (
    <div className="gang-rosters">
      <div className="gang-rosters-header">
        <button className="back-button" onClick={() => navigate(`/hideout/gang/${gang.id}`)}>
          ← Back to Gang
        </button>
        <h1>Rosters for {gang.name}</h1>
      </div>

      <div className="rosters-list">
        {gangRosters.length === 0 ? (
          <p>No rosters found. Create your first roster!</p>
        ) : (
          gangRosters.map((roster) => (
            <div key={roster.id} className="roster-card">
              <div className="roster-info">
                <h3>Roster {roster.id.slice(0, 8)}</h3>
                <p>Fighters: {roster.fighters.length}</p>
                <div className="fighter-list">
                  {roster.fighters.map((fighter) => (
                    <span key={fighter.id} className="fighter-tag">
                      {fighter.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="roster-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEditRoster(roster.id)}
                >
                  Edit
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveRoster(roster.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GangRosters; 