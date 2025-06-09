export interface DiceTestProps {
    value: number;
}

/**
 *  A component that displays a dice test.
 */
export function DiceTest({ value }: DiceTestProps) {

    if (value === 0) {
        return <span>-</span>;
    }

    return (
        <span>{value}+</span>
    )
}