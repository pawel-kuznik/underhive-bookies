
import { Button, ButtonLine } from '@pawel-kuznik/react-faceplate';
import { GangCard } from '../components/GangCard';
import { useGangStore } from '../store/gangStore';
import { useNavigate } from 'react-router-dom';


/**
 *  A page that displays a list of gangs and allows the user to create a new gang.
 */
export function Gangs() {
  const { gangs, removeGang } = useGangStore();
  const navigate = useNavigate();

  return (
    <div>
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
                <GangCard
                  key={gang.id}
                  gang={gang}
                  actions={<ButtonLine>
                    <Button label="Edit" onClick={() => navigate(`/hideout/gang/${gang.id}`)}/>
                    <Button label="Delete" onClick={() => removeGang(gang.id)}/>
                  </ButtonLine>}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}