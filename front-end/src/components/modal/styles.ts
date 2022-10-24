import styled from "styled-components";

export const StyledBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);

    top: 0;
    right: 0;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

`;
export const StyledModal = styled.div`
    width: 95%;
    max-width: 520px;
    min-height: 249px;
    border-radius: 8px;
    padding: 0 1.5rem 0 1.5rem;
    background-color: ${({ theme }) => theme.color.greyScale.whiteFixed};

    .modal_header {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            color: ${({ theme }) => theme.color.greyScale.grey1};
        }
        p {
            color: ${({ theme }) => theme.color.greyScale.grey4};
            &:hover {
                cursor: pointer;
            }
        }

        .modal_title {
            font-weight: ${({ theme }) => theme.typo.heading7_500.weight};
            font-size: ${({ theme }) => theme.typo.heading7_500.size};
            font-family: ${({ theme }) => theme.typo.heading7_500.fontFamily};
        }
    }

    .modal_main {
        padding: 1rem 0;
        min-height: 193px;
        font-family: Inter;
        font-size: ${({ theme }) => theme.typo.heading7_500.size};
    }
`;
