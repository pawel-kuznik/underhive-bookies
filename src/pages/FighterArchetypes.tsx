import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFighterArchetypeStore } from '../store/fighterArchetypeStore';
import { useHouseStore } from '../store/houseStore';
import { useRuleStore } from '../store/ruleStore';
import type { FighterArchetype } from '../types/fighterArchetype';
import { RuleAnchor } from '../components/RuleAnchor/RuleAnchor';

type SortDirection = 'asc' | 'desc';

const FighterArchetypes: React.FC = () => {
  const navigate = useNavigate();
  const { archetypes, removeArchetype } = useFighterArchetypeStore();
  const { houses } = useHouseStore();
  const { rules } = useRuleStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const toggleSortDirection = () => {
    setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
  };

  const filteredAndSortedArchetypes = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    const filtered = archetypes.filter(archetype => {
      const house = houses.find(h => h.id === archetype.houseId);
      const archetypeRules = archetype.rules.map(ruleId => {
        const rule = rules.find(r => r.id === ruleId);
        return rule ? `${rule.title} ${rule.description}` : '';
      }).join(' ');
      
      return (
        archetype.name.toLowerCase().includes(searchLower) || 
        (house?.name.toLowerCase().includes(searchLower) ?? false) ||
        archetypeRules.toLowerCase().includes(searchLower) ||
        archetype.wargear.some(item => item.toLowerCase().includes(searchLower))
      );
    });

    return [...filtered].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [archetypes, houses, rules, searchQuery, sortDirection]);

  const getHouseName = (houseId: string) => {
    const house = houses.find(h => h.id === houseId);
    return house?.name || 'Unknown House';
  };

  const handleEditArchetype = (archetype: FighterArchetype) => {
    navigate(`/codex/fighter-archetype/${archetype.id}`);
  };

  return (
    <div className="archetypes-page">
      <h1>Fighter Archetypes</h1>
      
      <div className="archetypes-controls">
        <div className="search-box">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search archetypes..."
            className="search-input"
          />
        </div>
        <button 
          className="sort-button"
          onClick={toggleSortDirection}
        >
          Sort by Name {sortDirection === 'asc' ? '↑' : '↓'}
        </button>
        <button
          className="add-archetype-button"
          onClick={() => navigate('/codex/fighter-archetype/new')}
        >
          Add New Archetype
        </button>
      </div>

      <div className="archetypes-list">
        {filteredAndSortedArchetypes.length === 0 ? (
          <p>No archetypes found. {archetypes.length === 0 ? 'Add your first archetype!' : 'Try adjusting your search.'}</p>
        ) : (
          <div className="archetypes-grid">
            {filteredAndSortedArchetypes.map((archetype) => (
              <div key={archetype.id} className="archetype-card">
                <h3>{archetype.name}</h3>
                <p className="archetype-house">House: {getHouseName(archetype.houseId)}</p>
                
                <div className="archetype-rules">
                  <h4>Rules:</h4>
                    {archetype.rules.map(ruleId => (
                      <RuleAnchor key={ruleId} rule={ruleId} />
                    ))}
                </div>

                <div className="archetype-wargear">
                  <h4>Wargear:</h4>
                  <ul>
                    {archetype.wargear.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="archetype-actions">
                  <button
                    className="edit-archetype-button"
                    onClick={() => handleEditArchetype(archetype)}
                  >
                    Edit
                  </button>
                  <button
                    className="remove-archetype-button"
                    onClick={() => removeArchetype(archetype.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FighterArchetypes; 