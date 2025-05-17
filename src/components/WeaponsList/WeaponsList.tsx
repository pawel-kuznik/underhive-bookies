import { Button } from '@pawel-kuznik/react-faceplate';
import { useWeaponStore } from '../../store/weaponStore';
import { WeaponStats } from '../WeaponStats';


export interface WeaponsListProps {
    onBuy?: (weaponId: string) => void;
}

export function WeaponsList({ onBuy }: WeaponsListProps) {
    const weapons = useWeaponStore(state => state.weapons);

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="font-bold p-2 border">Name</th>
                        <th className="font-bold p-2 border">Cost</th>
                        <th className="font-bold p-2 border">Range</th>
                        <th className="font-bold p-2 border">Accuracy</th>
                        <th className="font-bold p-2 border">Strength</th>
                        <th className="font-bold p-2 border">Armor Piercing</th>
                        <th className="font-bold p-2 border">Damage</th>
                        <th className="font-bold p-2 border">Ammunition</th>
                        <th className="font-bold p-2 border">Special Rules</th>
                    </tr>
                </thead>
                <tbody>
                    {weapons.map(weapon => {

                        const handleBuyClick = () => {
                            onBuy?.(weapon.id);
                        }

                        return <WeaponStats
                            key={weapon.id}
                            weaponId={weapon.id}
                            headers={false}
                            actions={<Button submit={false} label="Buy" onClick={handleBuyClick} />}
                        />
                    })}
                </tbody>
            </table>
        </div>
    );
}