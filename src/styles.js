import styled, { css, createGlobalStyle } from "styled-components";

// ==========-------------------- GLOBAL STYLES
export const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  flex-direction: column;

  background: grey;
  margin: 0;
  padding: 0;
  font-family: calibri;

}
`;

// ==========-------------------- SECTION STYLES

// ==========--------------------DIV STYLES
export const Wrapper = styled.div`
    width: auto;
    height: auto;

    margin: 10px;
    padding: 10px;

    box-shadow: 5px 5px rgba(0, 0, 0, 0.3) ;

    border: 5px solid white;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    background: rgb(100,200,200);

`;

// ==========-------------------- TABLE STYLES

export const Table = styled.table`
text-align: center;

table-layout: fixed;
border: 3px outset grey;
width: 300px;

`;

export const TableHead = styled.thead`
border: solid white;
background: black;
color: white ;
font-variant: small-caps;
`;

export const TableRow = styled.tr`
  border: 20px solid white; 
  background: green;
  color: white;
  cursor: pointer;

  &:hover{
    color: green;
    background: white;
    transition: ease-in-out 0.3s; 
  }
  `;