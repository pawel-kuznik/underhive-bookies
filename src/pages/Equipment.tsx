import React from 'react';
import { useEquipmentStore } from '../store/equipmentStore';
import './Equipment.css';

const Equipment: React.FC = () => {
  const { equipment } = useEquipmentStore();

  return (
    <div className="equipment-page">
      <h1>Equipment</h1>
      <div className="equipment-container">
        <div className="equipment-list">
          {equipment.map((item) => (
            <div key={item.id} className="equipment-card">
              <div className="equipment-header">
                <h2>{item.name}</h2>
                <span className="equipment-cost">{item.cost} credits</span>
              </div>
              <p className="equipment-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment; 