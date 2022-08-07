import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {  // * is a wildcard selector, which matches every element in the document
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #001820;
    background: #252f3a;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }
`;
