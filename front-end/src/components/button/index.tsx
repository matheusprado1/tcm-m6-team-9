interface IButton {
    text: string;
    size: "big" | "medium";
    bgColor: string;
    textColor: string;
    borderColor?: string;
    hoverTextColor?: string;
    hoverBgColor?: string;
    onClick(): void;
}

function Button(btnProp: IButton) {
    return <button onClick={btnProp.onClick}>text button</button>;
}
export default Button;
