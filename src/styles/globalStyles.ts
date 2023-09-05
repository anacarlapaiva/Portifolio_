import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html {
        --font: #DEDDE7;
        --soft-white: #f7f8f5;
        --soft-black: #212933;
        --blue: #90CAF9;
        --black: #000;
        --background: #2B3543;
        
        --gap-s: 0.625rem;
        --gap-xl: 5rem;
        --gap: 1.25rem;
  }

    body {
        margin: 0;
        color: var(--font);
        background: var(--background);
        color: var(--font);
        font-family: 'Poppins', sans-serif;

        button {
            cursor: pointer;
            font-size: 1rem;
            border-radius: var(--gap);
        }

        a{
            cursor: pointer;
        }

        h1,
        h2,
        h3 {
        font-weight: 600;
        margin: 0;
        }

        ul {
        list-style: none;
        padding: 0;
        margin: 0;
        }

        a{
          text-decoration: none;
        }

        a:visited {
          outline: none; 
        }
        
        a:focus {
          outline: none; 
        }
    }

    ::-webkit-scrollbar {
        width: 10px; 
    }

  ::-webkit-scrollbar-thumb {
    background-color: var(--blue); 
    border-radius: 5px; 
  }
`;

export const Container = styled.section`
  display: grid;
  padding: var(--gap) var(--gap-xl);
  gap: var(--gap);
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const TitlePage = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    color: var(--blue);
    text-transform: uppercase;
`;
