import { useRuleStore } from "../store/ruleStore";
import type { Rule } from "../types/rule";

export function getRule(id: string): Rule {
    const rule = useRuleStore.getState().findRuleById(id);
    if (!rule) throw new Error(`Rule with id ${id} not found`);
    return rule;
} 