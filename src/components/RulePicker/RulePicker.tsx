import { useRuleStore } from "../../store/ruleStore";
import type { Rule } from "../../types/rule";
import "./RulePicker.css";

export interface RulePickerProps {
    onPick?: (rule: Rule) => void;
}

/**
 *  This is a component that displays a list of rules from which the user can
 *  pick one or more. When user picks a rule, the onPick callback is called
 *  with an istance of that rule.
 */
export function RulePicker({ onPick }: RulePickerProps) {

    const { rules } = useRuleStore();
    const sortedRules = rules.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <table className="rulepicker">
            <thead>
                <tr>
                    <th colSpan={2}>

                    </th>
                </tr>
            </thead>
            {sortedRules.map((rule) => (
                <tr onClick={() => onPick?.(rule)}>
                    <td>{rule.title}</td>
                    <td>{rule.description}</td>
                </tr>
            ))}
        </table>
    )
}