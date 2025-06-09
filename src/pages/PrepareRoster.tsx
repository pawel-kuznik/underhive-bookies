import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGangStore } from '../store/gangStore';
import { useRosterStore } from '../store/rosterStore';
import type { Fighter } from '../types/gang';

export function PrepareRoster () {
  const { id, rosterId } = useParams<{ id: string; rosterId?: string }>();
  const navigate = useNavigate();
  const { gangs } = useGangStore();
  const { createRoster, findRosterById, updateRoster } = useRosterStore();
  const [selectedFighters, setSelectedFighters] = useState<Fighter[]>([]);

  const gang = gangs.find(g => g.id === id);

  useEffect(() => {
    if (rosterId) {
      const existingRoster = findRosterById(rosterId);
      if (existingRoster) {
        setSelectedFighters(existingRoster.fighters);
      }
    }
  }, [rosterId, findRosterById]);

  if (!gang) {
    return <div>Gang not found</div>;
  }

  const handleFighterSelect = (fighter: Fighter) => {
    if (selectedFighters.find(f => f.id === fighter.id)) {
      setSelectedFighters(selectedFighters.filter(f => f.id !== fighter.id));
    } else {
      setSelectedFighters([...selectedFighters, fighter]);
    }
  };

  const handleSaveRoster = () => {
    if (selectedFighters.length > 0) {
      if (rosterId) {
        updateRoster({
          id: rosterId,
          gangId: gang.id,
          fighters: selectedFighters,
        });
      } else {
        createRoster(gang.id, selectedFighters);
      }
      navigate(`/hideout/gang/${gang.id}/rosters`);
    }
  };

  return (
    <div className="prepare-roster">
      <div className="prepare-roster-header">
        <button className="back-button" onClick={() => navigate(`/hideout/gang/${gang.id}/rosters`)}>
          ← Back to Rosters
        </button>
        <h1>{rosterId ? 'Edit' : 'Prepare'} Roster for {gang.name}</h1>
      </div>

      <div className="roster-content">
        <div className="available-fighters">
          <h2>Available Fighters</h2>
          <div className="fighters-list">
            {gang.members.map((fighter) => (
              <div
                key={fighter.id}
                className={`fighter-item ${selectedFighters.find(f => f.id === fighter.id) ? 'selected' : ''}`}
                onClick={() => handleFighterSelect(fighter)}
              >
                <h3>{fighter.name}</h3>
                <p>XP: {fighter.xp}</p>
                <p>Weapons: {fighter.weapons.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="selected-fighters">
          <h2>Selected Fighters ({selectedFighters.length})</h2>
          <div className="selected-list">
            {selectedFighters.map((fighter) => (
              <div key={fighter.id} className="selected-fighter">
                <h3>{fighter.name}</h3>
                <button onClick={() => handleFighterSelect(fighter)}>Remove</button>
              </div>
            ))}
          </div>
          <button
            className="create-roster-button"
            onClick={handleSaveRoster}
            disabled={selectedFighters.length === 0}
          >
            {rosterId ? 'Save Changes' : 'Create Roster'}
          </button>
        </div>
      </div>
    </div>
  );
};
