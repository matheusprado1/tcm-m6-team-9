import styled from "styled-components";
import { getRandomColor } from "../../utils";

export const HeaderStyled = styled.header`
    position: relative;

    height: 80px;

    display: flex;
    align-items: center;
    width: 100%;

    color: ${({ theme }) => theme.color.greyScale.grey10};

    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale.grey6};

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        padding: 0 16px;

        .btn-menu-icon {
            padding: 16px;

            cursor: pointer;

            background-color: transparent;

            img {
                pointer-events: none;
            }
        }
    }
`;
