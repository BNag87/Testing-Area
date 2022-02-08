import styled, { css, createGlobalStyle } from "styled-components";

// ==========-------------------- GLOBAL STYLES
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: calibri;
}
`;

// ==========-------------------- SECTION STYLES
export const MainBody = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    text-align:center;
    align-items: center;
    
    background: rgb(50, 50, 150);

`;

// ==========--------------------SECTION STYLES
export const Wrapper = styled.div`
    width: auto;
    height: auto;

    margin: 10px 0px 10px 0px;
    padding: 10px;

    box-shadow: 5px 5px rgba(0, 0, 0, 0.3) ;

    border: 5px outset grey;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    text-align:center;
    
    background: rgb(100,200,200);

`;