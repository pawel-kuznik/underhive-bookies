import { create } from 'zustand';
import type { Rule } from '../types/rule';
import { initialRules } from './initialRules';
import { createRule } from '../actions/createRule';

interface RuleStore {
  rules: Rule[];
  addRule: (title: string, description: string, reference: string) => void;
  removeRule: (id: string) => void;
  updateRule: (rule: Rule) => void;
  findRuleById: (id: string) => Rule | undefined;
}

export const useRuleStore = create<RuleStore>((set, get) => ({
  rules: initialRules,

  addRule: (title: string, description: string, reference: string) => {
    const newRule = createRule(title);
    newRule.description = description;
    newRule.reference = reference;

    set((state) => ({
      rules: [...state.rules, newRule],
    }));
  },

  removeRule: (id: string) => {
    set((state) => ({
      rules: state.rules.filter((rule) => rule.id !== id),
    }));
  },

  updateRule: (rule: Rule) => {
    set((state) => ({
      rules: state.rules.map((r) => (r.id === rule.id ? rule : r)),
    }));
  },

  findRuleById: (id: string) => {
    return get().rules.find((rule) => rule.id === id);
  },
})); 