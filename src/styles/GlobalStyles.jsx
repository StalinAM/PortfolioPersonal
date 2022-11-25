import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    ul{
        list-style: none;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
        outline: none;
    }
`;
export default GlobalStyles;
