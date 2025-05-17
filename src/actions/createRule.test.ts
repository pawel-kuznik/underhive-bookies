import { describe, it, expect } from 'vitest';
import { createRule } from './createRule';
import type { Rule } from '../types/rule';

describe('createRule', () => {
  it('should generate a unique UUID for each rule', () => {
    const rule1 = createRule('Rule 1');
    const rule2 = createRule('Rule 2');

    expect(rule1.id).toBeDefined();
    expect(rule2.id).toBeDefined();
    expect(rule1.id).not.toBe(rule2.id);
  });

  it('should create a valid Rule object', () => {
    const rule = createRule('Test Rule');

    // Type check
    const validRule: Rule = rule;
    expect(validRule).toBeDefined();

    // Structure check
    expect(rule).toEqual({
      id: expect.any(String),
      title: 'Test Rule',
      description: '',
      reference: '',
    });
  });
}); 