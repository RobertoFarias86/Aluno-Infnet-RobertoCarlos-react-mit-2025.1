import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  h1, h2, h3 {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: ${({ theme }) => theme.buttonBackground};
  }
`;

export default GlobalStyle;