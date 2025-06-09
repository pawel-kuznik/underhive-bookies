export interface DistanceProps {
    value: number;
}

/**
 *  A component that displays a distance (in inches).
 */
export function Distance({ value }: DistanceProps) {
    return <span>{value}''</span>;
}