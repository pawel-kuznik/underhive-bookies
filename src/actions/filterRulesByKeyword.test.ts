import { describe, it, expect } from 'vitest';
import { filterRulesByKeyword } from './filterRulesByKeyword';
import type { Rule } from '../types/rule';

describe('filterRulesByKeyword', () => {
  const mockRules: Rule[] = [
    {
      id: 'rule-1',
      title: 'Combat Master',
      description: 'A master of combat',
      reference: 'Core Rulebook p.123'
    },
    {
      id: 'rule-2',
      title: 'Stealth Expert',
      description: 'Expert in stealth',
      reference: 'Core Rulebook p.124'
    },
    {
      id: 'rule-3',
      title: 'Master of Combat',
      description: 'Another combat rule',
      reference: 'Core Rulebook p.125'
    }
  ];

  it('should return rules that match the keyword in title (case-insensitive)', () => {
    const result = filterRulesByKeyword(mockRules, 'combat');
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      mockRules[0],
      mockRules[2]
    ]);
  });

  it('should return empty array when no rules match the keyword', () => {
    const result = filterRulesByKeyword(mockRules, 'nonexistent');
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it('should match partial words in title', () => {
    const result = filterRulesByKeyword(mockRules, 'steal');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(mockRules[1]);
  });

  it('should be case-insensitive', () => {
    const result1 = filterRulesByKeyword(mockRules, 'COMBAT');
    const result2 = filterRulesByKeyword(mockRules, 'combat');
    expect(result1).toEqual(result2);
  });

  it('should return all rules when keyword is empty string', () => {
    const result = filterRulesByKeyword(mockRules, '');
    expect(result).toHaveLength(3);
    expect(result).toEqual(mockRules);
  });

  it('should handle empty rules array', () => {
    const result = filterRulesByKeyword([], 'combat');
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
}); 