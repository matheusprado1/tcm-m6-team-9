import styled from "styled-components";

export const LoginRegisterStyled = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: fit-content;

    gap: 44px;

    width: 100%;

    a {
        width: fit-content;
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;
    }
`;

export const UserLoggedStyled = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 60px;

    width: fit-content;

    .user-name-abrev {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;

        border-radius: 16px;

        font-weight: ${({ theme }) => theme.typo.body2_500.weight};
        font-size: ${({ theme }) => theme.typo.body2_500.size};
        font-family: ${({ theme }) => theme.typo.body2_500.fontFamily};

        color: ${({ theme }) => theme.color.greyScale.whiteFixed};
    }

    .internal-nav {
        position: relative;

        white-space: nowrap;

        > p {
            color: ${({ theme }) => theme.color.greyScale.grey2};
            font-weight: ${({ theme }) => theme.typo.body2_500.weight};
            font-size: ${({ theme }) => theme.typo.body2_500.size};
            font-family: ${({ theme }) => theme.typo.body2_500.fontFamily};

            cursor: pointer;
        }

        > ul {
            display: none;
            flex-direction: column;
            position: absolute;
            gap: 16px;

            top: 30px;
            left: -40px;

            width: 200px;

            padding: 22px;

            background-color: ${({ theme }) => theme.color.greyScale.grey9};

            border-radius: 4px;
            box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

            li a {
                color: ${({ theme }) => theme.color.greyScale.grey2};
                font-size: ${({ theme }) => theme.typo.body1_600.size};
                font-weight: ${({ theme }) => theme.typo.body1_600.weight};
                font-family: ${({ theme }) => theme.typo.body1_600.fontFamily};

                white-space: nowrap;
            }
        }
    }

    @media screen and (min-width: 800px) {
        .internal-nav {
            > ul {
                left: -65px;
            }
        }
    }

    :hover ul {
        display: flex;
    }
`;
