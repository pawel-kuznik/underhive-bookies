import { renderHook } from '@testing-library/react';
import { useRule } from './useRule';
import { useRuleStore } from '../store/ruleStore';
import type { Rule } from '../types/rule';

describe('useRule', () => {
    // Setup test data
    const testRule: Rule = {
        id: 'test-rule-1',
        title: 'Test Rule',
        description: 'Test description',
        reference: 'Test reference'
    };

    const testRule2: Rule = {
        id: 'test-rule-2',
        title: 'Test Rule 2',
        description: 'Test description 2',
        reference: 'Test reference 2'
    };

    const testRules = [testRule, testRule2];

    beforeEach(() => {
        // Reset the store before each test by setting rules to test data
        useRuleStore.setState({ rules: testRules });
    });

    it('should return a rule when given a valid rule ID string', () => {
        const { result } = renderHook(() => useRule('test-rule-1'));
        
        expect(result.current).toEqual(testRule);
    });

    it('should return a rule when given a valid rule object', () => {
        const { result } = renderHook(() => useRule(testRule));
        
        expect(result.current).toEqual(testRule);
    });

    it('should throw an error when given an invalid rule ID', () => {
        expect(() => {
            renderHook(() => useRule('non-existent-rule'));
        }).toThrow();
    });

    it('should throw an error when given an invalid rule object', () => {
        const invalidRule = { ...testRule, id: 'non-existent-rule' };
        
        expect(() => {
            renderHook(() => useRule(invalidRule));
        }).toThrow();
    });
}); 