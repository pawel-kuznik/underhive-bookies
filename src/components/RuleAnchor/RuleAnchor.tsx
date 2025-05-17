import type { Rule } from "../../types/rule";
import { useRule } from "../../utils/useRule";

export interface RuleProps {
    rule: string|Rule;
}

export function RuleAnchor({ rule }: RuleProps) {
    const actualRule = useRule(rule);   

    return (
        <strong>{actualRule.title}</strong>
    );
}