import { useWeaponStore } from "../store/weaponStore";
import { WeaponForm } from "../components/WeaponForm/WeaponForm";
import { useNavigate, useParams } from "react-router-dom";
import type { Weapon } from "../types/weapon";

/**
 * A page to create a new weapon. 
 */
export function CreateWeaponPage() {

    const { id } = useParams();

    const navigate = useNavigate();
    const { storeWeapon, findWeaponById } = useWeaponStore();

    const weapon = id ? findWeaponById(id) : undefined;

    const handleSubmit = (weapon: Weapon) => {
        storeWeapon(weapon);
        navigate("/codex/weapons");
    }

    const handleCancel = () => {
        navigate("/codex/weapons");
    }

    return <WeaponForm initialData={weapon} onSubmit={handleSubmit} onCancel={handleCancel} />
}