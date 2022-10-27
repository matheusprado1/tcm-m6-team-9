import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IStyledButton {
    size: "big" | "medium";
    textColor: string;
    bgColor: string;
    borderColor?: string;
    hoverTextColor?: string;
    hoverBgColor?: string;
    hoverBorderColor?: string;
}

export interface IComponentButton extends IStyledButton {
    text: string;
    onClick(): void;
}
