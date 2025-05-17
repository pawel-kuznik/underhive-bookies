import type { Fighter } from '../../types/gang';

interface FighterStatsProps {
    fighter: Fighter;
}

export function FighterStats({ fighter }: FighterStatsProps) {
    return (
        <div className="members-table">
            <table>
                <thead>
                    <tr>
                        <th>XP</th>
                        <th>M</th>
                        <th>WS</th>
                        <th>BS</th>
                        <th>S</th>
                        <th>T</th>
                        <th>W</th>
                        <th>I</th>
                        <th>A</th>
                        <th>Ld</th>
                        <th>Cl</th>
                        <th>Wil</th>
                        <th>Int</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fighter.xp}</td>
                        <td>{fighter.attributes.movement}</td>
                        <td>{fighter.attributes.weaponSkill}</td>
                        <td>{fighter.attributes.ballisticSkill}</td>
                        <td>{fighter.attributes.strength}</td>
                        <td>{fighter.attributes.toughness}</td>
                        <td>{fighter.attributes.wounds}</td>
                        <td>{fighter.attributes.initiative}</td>
                        <td>{fighter.attributes.attacks}</td>
                        <td>{fighter.attributes.leadership}</td>
                        <td>{fighter.attributes.coolness}</td>
                        <td>{fighter.attributes.willPower}</td>
                        <td>{fighter.attributes.intellect}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}