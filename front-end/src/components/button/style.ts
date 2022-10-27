import styled from "styled-components";

import { IStyledButton } from "../../interfaces";

export const StyledButton = styled.button<IStyledButton>`
    width: 100%;
    padding: ${({ size }) => (size === "big" ? "12px 28px" : "12px 20px")};
    font-size: ${({ size }) => (size === "big" ? "16px" : "14px")};
    background-color: ${({ bgColor }) => bgColor};
    border-color: ${({ borderColor }) => borderColor};
    border: 1.5px solid ${({ borderColor }) => borderColor};
    border-radius: 4px;

    :hover {
        color: ${({ hoverTextColor }) => hoverTextColor};
        background-color: ${({ hoverBgColor }) => hoverBgColor};
        border: 1.5px solid ${({ hoverBorderColor }) => hoverBorderColor};
    }
`;
