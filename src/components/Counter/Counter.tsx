export interface CounterProps {
    value: number;
    label: string;
}

export function Counter({ value, label }: CounterProps) {
    return (
        <div>
            <div>
                {value}
            </div>
            <div>
                {label}
            </div>
        </div>
    );
}