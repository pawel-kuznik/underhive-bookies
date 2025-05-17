import type { Rule } from "../../types/rule";
import { RuleAnchor } from "../RuleAnchor/RuleAnchor";
import "./List.css";

export interface ListProps {
    rules: Rule[];
    onRemove: (id: string) => void;
}

export function List({ rules, onRemove }: ListProps) {
    return (
        <div className="ruleformfield-list">
            {rules.map(r => (
                <div key={r.id} className="ruleformfield-list-item">
                    <span>
                        <RuleAnchor rule={r} />
                    </span>
                    <button onClick={() => onRemove(r.id)}>X</button>
                </div>
            ))}
        </div>
    )
}