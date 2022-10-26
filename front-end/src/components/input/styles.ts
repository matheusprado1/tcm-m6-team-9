import styled from "styled-components";

interface InputProps {
    type: string;
    width: string;
}

export const StyledInput = styled.div<InputProps>`
    width: 100%;
    max-width: ${({ width }) => (width === "small" ? "140px" : "315px")};
    height: ${({ type }) => (type === "textArea" ? "80px" : "48px")};

    display: flex;
    flex-direction: column;
    gap: 8px;

    .label_input {
        font-size: 14px;
        font-weight: 500;
        font-family: "Inter";
        color: ${({ theme }) => theme.color.greyScale.grey1};
    }

    .input_input {
        padding: 0 16px 0 16px;
        width: 100%;
        height: ${({ type }) => (type === "textArea" ? "80px" : "48px")};
        border: 1.5px solid ${({ theme }) => theme.color.greyScale.grey7};
        border-radius: 4px;
        color: ${({ theme }) => theme.color.greyScale.grey3};
        font-size: 16px;
        font-family: "Inter";
        font-weight: 400;
        ::placeholder {
            color: ${({ theme }) => theme.color.greyScale.grey3};
            font-size: 16px;
            font-family: "Inter";
            font-weight: 400;
        }
        :focus {
            border-color: ${({ theme }) => theme.color.brand.brand2};
            background-color: ${({ theme }) => theme.color.greyScale.grey9};
        }
        :hover {
            background-color: ${({ theme }) => theme.color.greyScale.grey8};
        }
    }
    .error {
        border-color: ${({ theme }) => theme.color.feedback.alert1};
    }
`;
