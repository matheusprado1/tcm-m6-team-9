import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
}

body{
    min-width: 375px;
    height: 100vh;

    background-color: ${({ theme }) => theme.color.greyScale.grey8};
}
`;
