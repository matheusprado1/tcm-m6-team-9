import styled from "styled-components";

export const NavStyled = styled.nav`
    .nav {
        width: 100%;

        padding: 32px 0;

        display: none;
        flex-direction: column;

        position: absolute;
        top: 80px;
        left: 0;

        box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.09);

        gap: 44px;

        .divider {
            height: 1px;
            background-color: ${({ theme }) => theme.color.greyScale.grey4};
        }

        > li {
            padding: 0 16px;
        }

        > li a {
            color: ${({ theme }) => theme.color.greyScale.grey2};
            font-size: ${({ theme }) => theme.typo.body1_600.size};
            font-weight: ${({ theme }) => theme.typo.body1_600.weight};
            font-family: ${({ theme }) => theme.typo.body1_600.fontFamily};

            white-space: nowrap;
        }

        .nav-internal {
            display: flex;
            flex-direction: column;
            gap: 8px;

            width: fit-content;
        }
    }
    .nav.opened {
        display: flex;
    }

    @media screen and (min-width: 800px) {
        .nav,
        .nav.opened {
            padding-right: 60px;

            position: static;

            display: flex;
            flex-direction: row;
            align-items: center;

            box-shadow: none;

            .divider {
                height: 80px;
                width: 2px;
                background-color: ${({ theme }) => theme.color.greyScale.grey6};
            }

            li {
                padding: 0;
            }

            .nav-internal {
                flex-direction: row;
            }
        }
    }
`;
