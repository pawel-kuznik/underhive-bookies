import type { Gang } from "../../types/gang";

export interface StashProps {
    gang: Gang;
}

export function Stash({ gang }: StashProps) {
    return (
        <div>Stash</div>
    )
}