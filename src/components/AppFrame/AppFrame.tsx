import type { PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

export interface AppFrameProps extends PropsWithChildren {

}

export function AppFrame({ children }: AppFrameProps) {
 
    return (
        <div>
            <Navigation/>
            <div>
                {children}
            </div>
        </div>
    )
}