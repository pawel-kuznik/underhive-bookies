export interface DiceModifierProps {
    value: number;
    invert?: boolean;
}

/**
 *  A component that displays a dice modifier.
 */
export function DiceModifier({ value, invert = false }: DiceModifierProps) {

    if (value === 0) {
        return <span>-</span>;
    }

    const sign = invert ? value > 0 ? "-" : "+" : value > 0 ? "+" : "";
    return <span>{sign}{value}</span>;
}