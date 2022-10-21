import styled from "styled-components";

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

        .menu-icon {
            padding: 16px;

            cursor: pointer;
        }
    }
`;

export const NavStyled = styled.nav`
    position: absolute;
    top: 80px;

    width: 100%;

    box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.09);

    div {
        width: 100%;

        height: 1px;
        background-color: ${({ theme }) => theme.color.greyScale.grey4};
    }

    ul {
        width: 100%;

        padding: 32px 16px;

        display: flex;
        flex-direction: column;

        gap: 44px;

        a {
            color: ${({ theme }) => theme.color.greyScale.grey2};
            font-size: ${({ theme }) => theme.typo.body1_600.size};
            font-weight: ${({ theme }) => theme.typo.body1_600.weight};
            font-family: ${({ theme }) => theme.typo.body1_600.fontFamily};
        }

        button {
            width: 100%;
        }
    }
`;
