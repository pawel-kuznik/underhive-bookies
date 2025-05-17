import { Button, FormFieldLayout } from "@pawel-kuznik/react-faceplate";
import type { Rule } from "../../types/rule";
import { RulePicker } from "../RulePicker";
import { useState } from "react";
import { List } from "./List";

export interface RuleFormFieldProps {
    label: string;
    name?: string;
    onPick?: (rule: Rule) => void;
}

export function RuleFormField({ label, name, onPick }: RuleFormFieldProps) {

    const [selected, setSelected] = useState<Rule[]>([]);
    const [picking, setPicking] = useState<boolean>(false);

    const handlePick = (rule: Rule) => {

        if (selected.find(r => r.id === rule.id)) {
            return;
        }

        setSelected([...selected, rule]);
        onPick?.(rule);
    }

    const handleRemove = (id: string) => {
        setSelected(selected.filter(r => r.id !== id));
    }

    return (
        <FormFieldLayout label={label}>
            <input type="hidden" name={name} value={selected.map(r => r.id).join(',')} />
            <List rules={selected} onRemove={handleRemove} />
            <Button label="Pick" onClick={() => setPicking(!picking)} />
            {picking && <RulePicker onPick={handlePick} />}
        </FormFieldLayout>
    )
}