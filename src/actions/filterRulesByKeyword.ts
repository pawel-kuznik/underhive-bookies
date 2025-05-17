import type { Rule } from "../types/rule";

export function filterRulesByKeyword(rules: Rule[], keyword: string) {
    return rules.filter((rule) => {
        return rule.title.toLowerCase().includes(keyword.toLowerCase());
    });
}