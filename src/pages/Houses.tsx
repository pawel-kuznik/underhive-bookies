import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHouseStore } from '../store/houseStore';
import type { House } from '../types/house';
import { HousesTable } from '../components/HousesTable';
import { Button, Page } from '@pawel-kuznik/react-faceplate';

const Houses: React.FC = () => {
  const navigate = useNavigate();
  const { removeHouse } = useHouseStore();
  const [searchQuery, setSearchQuery] = useState('');

  const rowActions = (house: House) => {
    return (
      <div>
        <Button color="blue" label="Edit" onClick={() => navigate(`/codex/houses/${house.id}`)}/>
        <Button color="red" label="Delete" onClick={() => removeHouse(house.id)}/>
      </div>
    )
  }

  return (
    <Page>
      <div className="houses-header">
        <Link to="/codex/houses/new" className="create-house-button">
          Create New House
        </Link>
      </div>
      
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
      </div>
      <HousesTable filter={searchQuery} actions={rowActions}/>
    </Page>
  );
};

export default Houses; 