import { StyledButton } from "./style";

import { IComponentButton } from "../../interfaces";

function Button(btnProp: IComponentButton) {
    return (
        <StyledButton
            size={btnProp.size}
            textColor={btnProp.textColor}
            bgColor={btnProp.bgColor}
            borderColor={btnProp.borderColor}
            hoverTextColor={btnProp.hoverTextColor}
            hoverBgColor={btnProp.hoverBgColor}
            hoverBorderColor={btnProp.hoverBorderColor}
            onClick={btnProp.onClick}
        >
            {btnProp.text}
        </StyledButton>
    )
}
export default Button;
