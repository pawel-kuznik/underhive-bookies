import React, { useState, type RefObject } from 'react';
import { useGang } from '../../utils/useGang';
import { FighterCard } from '../FighterCard';
import type { Fighter } from '../../types/gang';

export interface FightersCarouselProps {
    /**
     * The ID of the gang whose fighters should be displayed
     */
    gangId: string;

    /**
     * Callback function that is called when a fighter is selected
     */
    onFighterSelect?: (fighter: Fighter) => void;

    /**
     * A ref object that is used to store the current fighter
     */
    currentFighterRef?: RefObject<Fighter>;
}

export function FightersCarousel({ gangId, onFighterSelect, currentFighterRef }: FightersCarouselProps) {
    const gang = useGang(gangId);
    const [selectedFighterId, setSelectedFighterId] = useState<string | null>(null);

    const handleFighterClick = (fighter: Fighter) => {
        if (currentFighterRef?.current) {
            currentFighterRef.current = fighter;
        }
        setSelectedFighterId(fighter.id);
        onFighterSelect?.(fighter);
    };

    return (
        <div className="fighters-carousel">
            <div className="fighters-carousel-container">
                {gang.members.map((fighter) => (
                    <div
                        key={fighter.id}
                        className={`fighter-card-wrapper ${selectedFighterId === fighter.id ? 'selected' : ''}`}
                        onClick={() => handleFighterClick(fighter)}
                    >
                        <FighterCard fighter={fighter} />
                    </div>
                ))}
            </div>
        </div>
    );
}