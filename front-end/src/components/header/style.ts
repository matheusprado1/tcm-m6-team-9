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

    .nav {
        > ul {
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

            .login__register {
                gap: 44px;
            }

            .user__logged {
                display: flex;
                flex-direction: row;
                align-items: center;

                height: 60px;

                .user-name-abrev {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 32px;
                    height: 32px;

                    border-radius: 16px;

                    font-weight: ${({ theme }) => theme.typo.body2_500.weight};
                    font-size: ${({ theme }) => theme.typo.body2_500.size};
                    font-family: ${({ theme }) =>
                        theme.typo.body2_500.fontFamily};

                    color: ${({ theme }) => theme.color.greyScale.whiteFixed};
                    background-color: ${({ theme }) =>
                        getRandomColor(theme.color.randomColors)};
                }

                .internal-nav {
                    position: relative;

                    white-space: nowrap;

                    > p {
                        color: ${({ theme }) => theme.color.greyScale.grey2};
                        font-weight: ${({ theme }) =>
                            theme.typo.body2_500.weight};
                        font-size: ${({ theme }) => theme.typo.body2_500.size};
                        font-family: ${({ theme }) =>
                            theme.typo.body2_500.fontFamily};

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

                        background-color: ${({ theme }) =>
                            theme.color.greyScale.grey9};

                        border-radius: 4px;
                        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

                        li a {
                            color: ${({ theme }) =>
                                theme.color.greyScale.grey2};
                            font-size: ${({ theme }) =>
                                theme.typo.body1_600.size};
                            font-weight: ${({ theme }) =>
                                theme.typo.body1_600.weight};
                            font-family: ${({ theme }) =>
                                theme.typo.body1_600.fontFamily};

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

                :hover nav ul {
                    display: flex;
                }
            }
        }
    }
    .nav.opened {
        > ul {
            display: flex;
        }
    }

    @media screen and (min-width: 800px) {
        section {
            .btn-menu-icon {
                display: none;
            }
        }

        .nav,
        .nav.opened {
            > ul {
                padding: 0;

                position: static;

                display: flex;
                flex-direction: row;
                align-items: center;

                box-shadow: none;

                .divider {
                    height: 80px;
                    width: 2px;
                    background-color: ${({ theme }) =>
                        theme.color.greyScale.grey6};
                }

                li {
                    padding: 0;
                }

                .nav-internal {
                    flex-direction: row;
                    padding-right: 60px;
                }
            }
        }
    }
`;
