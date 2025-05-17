import { useState } from "react";
import { useRuleStore } from "../../store/ruleStore";
import type { Rule } from "../../types/rule";
import "./RulePicker.css";
import { filterRulesByKeyword } from "../../actions/filterRulesByKeyword";

export interface RulePickerProps {
    onPick?: (rule: Rule) => void;
}

/**
 *  This is a component that displays a list of rules from which the user can
 *  pick one or more. When user picks a rule, the onPick callback is called
 *  with an istance of that rule.
 */
export function RulePicker({ onPick }: RulePickerProps) {

    const [keyword, setKeyword] = useState<string>("");
    const { rules } = useRuleStore();
    const sortedRules = rules.sort((a, b) => a.title.localeCompare(b.title));
    const filteredRules = filterRulesByKeyword(sortedRules, keyword);

    return (
        <table className="rulepicker">
            <thead>
                <tr>
                    <th colSpan={2}>
                        <input type="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
                    </th>
                </tr>
            </thead>
            {filteredRules.map((rule) => (
                <tr onClick={() => onPick?.(rule)}>
                    <td>{rule.title}</td>
                    <td>{rule.description}</td>
                </tr>
            ))}
        </table>
    )
}