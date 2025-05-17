import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGangStore } from '../store/gangStore';
import { FighterForm } from '../components/FighterForm';
import { FighterCard } from '../components/FighterCard';
import { addCreditsToGang } from '../actions/addCreditsToGang';

const GangDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { gangs, updateGang } = useGangStore();
  const gang = gangs.find(g => g.id === id);

  if (!gang) {
    return <div>Gang not found</div>;
  }

  const handleRemoveMember = (memberId: string) => {
    const updatedGang = {
      ...gang,
      members: gang.members.filter(m => m.id !== memberId),
    };
    updateGang(updatedGang);
  };

  const handleAddCredits = (credits: number) => {
    addCreditsToGang(gang.id, credits);
  };

  return (
    <div className="gang-details">
      <div className="gang-details-header">
        <button className="back-button" onClick={() => navigate('/hideout/gangs')}>
          ← Back to Gangs
        </button>
        <h1>{gang.name}</h1>
      </div>

      <div className="gang-info">
        <div className="gang-stats">
          <h2>Gang Information</h2>
          <p>House: {gang.house || 'Not set'}</p>
          <p>Credits: {gang.credits}</p>
          <p>Reputation: {gang.reputation}</p>
          <button onClick={() => handleAddCredits(100)}>Add Credits</button>
          <button 
            className="trading-post-button"
            onClick={() => navigate(`/hideout/gang/${gang.id}/trading-post`)}
          >
            Visit Trading Post
          </button>
          <button 
            className="prepare-roster-button"
            onClick={() => navigate(`/hideout/gang/${gang.id}/prepare-roster`)}
          >
            Prepare Roster
          </button>
          <button 
            className="view-rosters-button"
            onClick={() => navigate(`/hideout/gang/${gang.id}/rosters`)}
          >
            View Rosters
          </button>
        </div>

        <div className="members-section">
          <h2>Gang Members</h2>
          <div className="add-member">
            <FighterForm gangId={gang.id}/>
          </div>

          <div className="members-list">
            {gang.members.map((member) => (
              <FighterCard
                key={member.id}
                fighter={member}
                onRemoveMember={handleRemoveMember}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GangDetails; 