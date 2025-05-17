import { useRuleStore } from "../store/ruleStore";
import type { Rule } from "../types/rule";

export function useRule(id: string|Rule) {
    const { rules } = useRuleStore();
    const actualId = typeof id === 'string' ? id : id.id;
    const rule = rules.find(r => r.id === actualId);
    if (!rule) throw new Error(`Rule with id ${id} not found`);
    return rule;
}