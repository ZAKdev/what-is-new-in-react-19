import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.fontSize.md};
    line-height: 1.5;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    background-color: ${(props) => props.theme.colors.surface};
    padding: 2px 4px;
    border-radius: ${(props) => props.theme.borderRadius.sm};
  }

  pre {
    background-color: ${(props) => props.theme.colors.surface};
    padding: ${(props) => props.theme.spacing.md};
    border-radius: ${(props) => props.theme.borderRadius.md};
    overflow-x: auto;
    margin: ${(props) => props.theme.spacing.md} 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${(props) => props.theme.spacing.md};
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
  }

  p {
    margin-bottom: ${(props) => props.theme.spacing.md};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
