import { useGangStore } from "../store/gangStore";

export function addCreditsToGang(gangId: string, credits: number) {
    const gang = useGangStore.getState().findGangById(gangId);

    if (!gang) throw new Error(`Gang with id ${gangId} not found`);

    const updatedGang = {
        ...gang,
        credits: gang.credits + credits
    };  

    useGangStore.getState().updateGang(updatedGang);
}