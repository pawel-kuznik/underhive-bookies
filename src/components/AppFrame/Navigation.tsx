import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./Navigation.css"

/**
 *  A component to display top navigation of the application. 
 */
export function Navigation() {

    const { t } = useTranslation();
    return (
        <nav className="appframe-navigation">
            <ul>
                <li><Link to="/hideout/gangs">{t("navigation.gangs")}</Link></li>
                <li><Link to="/underhive/campaign">{t("navigation.campaign")}</Link></li>
                <li><Link to="/codex/rules">{t("navigation.rules")}</Link></li>
                <li><Link to="/codex/weapons">{t("navigation.weapons")}</Link></li>
                <li><Link to="/codex/equipment">{t("navigation.equipment")}</Link></li>
                <li><Link to="/codex/fighter-archetypes">{t("navigation.fighter-archetypes")}</Link></li>
                <li><Link to="/codex/houses">{t("navigation.houses")}</Link></li>
                <li>
                    <LanguageSwitcher/>
                </li>
            </ul>
        </nav>
    );
}