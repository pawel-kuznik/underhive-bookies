import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGangStore } from '../store/gangStore';
import { WeaponsList } from '../components/WeaponsList/WeaponsList';
import { FightersCarousel } from '../components/FightersCarousel';
import type { Fighter } from '../types/gang';
import { purchaseWeaponForFighter } from '../actions/purchuaseWeaponForFighter';

export function TradingPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { gangs } = useGangStore();
  const gang = gangs.find(g => g.id === id);

  if (!gang) {
    return <div>Gang not found</div>;
  }

  const currentFighterRef = useRef<Fighter>(gang.members[0]);

  const onWeaponBuy = (weaponId: string) => {
    purchaseWeaponForFighter(gang.id, currentFighterRef.current.id, weaponId);
  }

  return (
    <div className="trading-post">
      <div className="trading-post-header">
        <button className="back-button" onClick={() => navigate(`/hideout/gang/${id}`)}>
          ← Back to Gang
        </button>
        <h1>Trading Post - {gang.name}</h1>
      </div>
      
      <div className="trading-post-content">
        <div className="gang-info">
          <h2>Available Credits: {gang.credits}</h2>
        </div>

        <div>
          <FightersCarousel gangId={gang.id} currentFighterRef={currentFighterRef} />
        </div>
        
        <div className="trading-items">
          <h2>Available Weapons</h2>
          <WeaponsList onBuy={onWeaponBuy} />
        </div>
      </div>
    </div>
  );
};
 