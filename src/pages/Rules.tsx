import { useState, useMemo } from 'react';
import { useRuleStore } from '../store/ruleStore';
import type { Rule } from '../types/rule';

type SortDirection = 'asc' | 'desc';

export function Rules() {
  const { rules, addRule, removeRule, updateRule } = useRuleStore();
  const [newRuleTitle, setNewRuleTitle] = useState('');
  const [newRuleDescription, setNewRuleDescription] = useState('');
  const [newRuleReference, setNewRuleReference] = useState('');
  const [editingRule, setEditingRule] = useState<Rule | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleAddRule = () => {
    if (newRuleTitle.trim() && newRuleDescription.trim()) {
      addRule(newRuleTitle.trim(), newRuleDescription.trim(), newRuleReference.trim());
      setNewRuleTitle('');
      setNewRuleDescription('');
      setNewRuleReference('');
    }
  };

  const handleEditRule = (rule: Rule) => {
    setEditingRule(rule);
  };

  const handleSaveEdit = () => {
    if (editingRule && editingRule.title.trim() && editingRule.description.trim()) {
      updateRule(editingRule);
      setEditingRule(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingRule(null);
  };

  const toggleSortDirection = () => {
    setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
  };

  const filteredAndSortedRules = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    const filtered = rules.filter(rule => 
      rule.title.toLowerCase().includes(searchLower) || 
      rule.description.toLowerCase().includes(searchLower) ||
      rule.reference.toLowerCase().includes(searchLower)
    );

    return [...filtered].sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [rules, searchQuery, sortDirection]);

  return (
    <div className="rules-page">
      <h1>Rules</h1>
      
      <div className="rules-controls">
        <div className="search-box">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rules..."
            className="search-input"
          />
        </div>
        <button 
          className="sort-button"
          onClick={toggleSortDirection}
        >
          Sort by Title {sortDirection === 'asc' ? '↑' : '↓'}
        </button>
      </div>

      <div className="add-rule-section">
        <h2>Add New Rule</h2>
        <div className="add-rule-form">
          <input
            type="text"
            value={newRuleTitle}
            onChange={(e) => setNewRuleTitle(e.target.value)}
            placeholder="Rule title"
            className="rule-title-input"
          />
          <textarea
            value={newRuleDescription}
            onChange={(e) => setNewRuleDescription(e.target.value)}
            placeholder="Rule description"
            className="rule-description-input"
          />
          <input
            type="text"
            value={newRuleReference}
            onChange={(e) => setNewRuleReference(e.target.value)}
            placeholder="Rule reference (e.g., page number, section)"
            className="rule-reference-input"
          />
          <button
            className="add-rule-button"
            onClick={handleAddRule}
            disabled={!newRuleTitle.trim() || !newRuleDescription.trim()}
          >
            Add Rule
          </button>
        </div>
      </div>

      <div className="rules-list">
        <h2>Existing Rules</h2>
        {filteredAndSortedRules.length === 0 ? (
          <p>No rules found. {rules.length === 0 ? 'Add your first rule!' : 'Try adjusting your search.'}</p>
        ) : (
          <div className="rules-grid">
            {filteredAndSortedRules.map((rule) => (
              <div key={rule.id} className="rule-card">
                {editingRule?.id === rule.id ? (
                  <div className="edit-rule-form">
                    <input
                      type="text"
                      value={editingRule.title}
                      onChange={(e) => setEditingRule({ ...editingRule, title: e.target.value })}
                      className="rule-title-input"
                    />
                    <textarea
                      value={editingRule.description}
                      onChange={(e) => setEditingRule({ ...editingRule, description: e.target.value })}
                      className="rule-description-input"
                    />
                    <input
                      type="text"
                      value={editingRule.reference}
                      onChange={(e) => setEditingRule({ ...editingRule, reference: e.target.value })}
                      placeholder="Rule reference"
                      className="rule-reference-input"
                    />
                    <div className="edit-actions">
                      <button
                        className="save-edit-button"
                        onClick={handleSaveEdit}
                        disabled={!editingRule.title.trim() || !editingRule.description.trim()}
                      >
                        Save
                      </button>
                      <button className="cancel-edit-button" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3>{rule.title}</h3>
                    <p className="rule-reference">Reference: {rule.reference || 'N/A'}</p>
                    <p className="rule-description">{rule.description}</p>
                    <div className="rule-actions">
                      <button
                        className="edit-rule-button"
                        onClick={() => handleEditRule(rule)}
                      >
                        Edit
                      </button>
                      <button
                        className="remove-rule-button"
                        onClick={() => removeRule(rule.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
