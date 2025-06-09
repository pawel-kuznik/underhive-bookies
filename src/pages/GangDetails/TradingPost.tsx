import { useRef } from "react";
import { WeaponsList } from "../../components/WeaponsList/WeaponsList";
import type { Fighter, Gang } from "../../types/gang";
import { purchaseWeaponForFighter } from "../../actions/purchuaseWeaponForFighter";
import { FightersCarousel } from "../../components/FightersCarousel";

export interface TradingPostProps {
    gang: Gang;
}

export function TradingPost({ gang }: TradingPostProps) {

    const currentFighterRef = useRef<Fighter>(gang.members[0]);

    const onWeaponBuy = (weaponId: string) => {
        purchaseWeaponForFighter(gang.id, currentFighterRef.current.id, weaponId);
    }

    return (
        <div>
            <FightersCarousel gangId={gang.id} currentFighterRef={currentFighterRef} />
            <WeaponsList onBuy={onWeaponBuy} />
        </div>
    )
}