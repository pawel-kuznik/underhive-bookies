import type { PropsWithChildren } from "react";
import "./CombinedAttribute.css";

export interface CombinedAttributeProps extends PropsWithChildren {
}

/**
 *  A component that displays a combined attribute.
 */
export function CombinedAttribute({ children }: CombinedAttributeProps) {
    return <span className="combinedattribute">{children}</span>;
}