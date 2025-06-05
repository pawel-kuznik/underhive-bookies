import type { PropsWithChildren } from "react";
import "./DescriptiveTitle.css";

export interface DescriptiveTitleProps extends PropsWithChildren {
    title: string;
    description: string;
} 

/**
 *  A component that shows a title, a description, a mounts children in
 *  a container on the right side of the title.
 */
export function DescriptiveTitle({ title, description, children }: DescriptiveTitleProps) {
    return (
        <div className="descriptivetitle">
            <h1>{title}</h1>
            <span>{description}</span>
            <div className="descriptivetitle-children">{children}</div>
        </div>
    );
}