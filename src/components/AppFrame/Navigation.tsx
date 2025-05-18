import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";
import "./Navigation.css"

/**
 *  A component to display top navigation of the application. 
 */
export function Navigation() {
    return (
        <nav className="appframe-navigation">
            <ul>
                <li><Link to="/hideout/gangs">Gangs</Link></li>
                <li><Link to="/underhive/campaign">Campaign</Link></li>
                <li><Link to="/codex/rules">Rules</Link></li>
                <li><Link to="/codex/weapons">Weapons</Link></li>
                <li><Link to="/codex/equipment">Equipment</Link></li>
                <li><Link to="/codex/fighter-archetypes">Fighter Archetypes</Link></li>
                <li><Link to="/codex/houses">Houses</Link></li>
                <li>
                    <LanguageSwitcher/>
                </li>
            </ul>
        </nav>
    );
}