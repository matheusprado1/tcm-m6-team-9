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
    -webkit-tap-highlight-color: transparent;
}

body{
    min-width: 375px;
    height: 100vh;

    background-color: ${({ theme }) => theme.color.greyScale.grey8};
}

button {
    font-family: ${({ theme }) => theme.typo.btn_bigText.fontFamily};
    cursor: pointer;
}
`;
