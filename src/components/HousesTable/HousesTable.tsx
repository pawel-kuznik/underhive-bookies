import { DataTable } from "@pawel-kuznik/react-faceplate"
import { useTranslation } from 'react-i18next';
import { useHouseStore } from "../../store/houseStore";
import type { House } from "../../types/house";
import type { ReactNode } from "react";

export interface HousesTableProps {
    filter?: string;
    actions?: (data: House) => React.ReactNode;
}

/**
 *  A component to display a table of houses. 
 */
export const HousesTable = ({ filter, actions }: HousesTableProps) => {
    const { t } = useTranslation();
    const { houses } = useHouseStore();

    const filteredHouses = houses.filter((house) => {
        return house.name.toLowerCase().includes(filter?.toLowerCase() || "");
    });
    
    const data = filteredHouses.map((house) => {
        const row: ReactNode[] = [house.name, house.reference];
        if (actions) {  
            row.push(actions(house));
        }
        return row;
    });

    const columns = [
        t('table.name'),
        t('table.reference'),
    ];

    if (actions) {
        columns.push("");
    }

    return <DataTable columns={columns} data={data} />
}