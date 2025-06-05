import { useParams, useNavigate } from 'react-router-dom';
import { useGangStore } from '../store/gangStore';
import { FighterForm } from '../components/FighterForm';
import { FighterCard } from '../components/FighterCard';
import { addCreditsToGang } from '../actions/addCreditsToGang';
import { Button, ButtonLine, Page } from '@pawel-kuznik/react-faceplate';
import { useHouse } from '../utils/useHouse';
import { DescriptiveTitle } from '../components/DescriptiveTitle/DescriptiveTitle';
import { Counter } from '../components/Counter';
import { calculateGangValue } from '../actions/calculateGangValue';

/**
 *  A page that displays the details of a gang.
 */
export default function GangDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { gangs, updateGang, removeGang } = useGangStore();
  const gang = gangs.find(g => g.id === id);

  if (!gang) {
    return <div>Gang not found</div>;
  }

  const house = useHouse(gang.house);

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

  const handleRemoveGang = () => {

    // TODO: Add a confirmation dialog

    removeGang(gang.id);
    navigate('/hideout/gangs');
  };

  return (
    <Page>
      <DescriptiveTitle title={gang.name} description={house.name}>
        <ButtonLine>
          <Counter value={gang.reputation} label="Reputation"/>
          <Counter value={gang.credits} label="Credits"/>
          <Counter value={calculateGangValue(gang)} label="Value"/>
          <Button label="Remove" color="red" onClick={handleRemoveGang}/>
        </ButtonLine>
      </DescriptiveTitle>

        <div className="gang-info">
          <div className="gang-stats">
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
    </Page>
  );
};