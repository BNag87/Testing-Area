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
    width: ${props => props.inputWidth || "auto"};
    height: auto;

    margin: 10px;
    padding: 10px;

    box-shadow: 5px 5px rgba(0, 0, 0, 0.3) ;

    border: 5px solid white;
    border-radius: 20px;

    display: flex;
    flex-direction: ${props => props.inputFlexDirection || "column"};
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    
    background: rgb(100,200,200);

`;

export const RowSpacer = styled.div`
width: 100%;
`
export const ColumnSplitter = styled.div`
height: 100%;
`

// ==========-------------------- TABLE STYLES

export const Table = styled.table`
text-align: center;

table-layout: fixed;
border: 3px outset grey;
width: ${props => props.inputWidth || "300px"}

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

  // ==========-------------------- INPUT STYLES

  export const TextInput = styled.input`
    text-align:center;
    background: white;
    color: black;
    padding: ${props => props.inputPadding || "5px"};
    margin: ${props => props.inputMargin || "-3px 0px 5px 0px"};
    border: none;
    width: ${props => props.inputWidth || "80px"};

    &:disabled{
    background: darkgray;
    color: black;
    width: 92%;
    transition: ease-in-out 0.3s;
    }
    `;

  export const Button = styled.button`
  
    border: red  1px solid;
    border-radius: 5px 3px 5px 3px;
    box-shadow: 2px 2px rgba(0,0,0,0.4);
    padding: 10px;
    margin: 5px;
    background: #b368a3; //blue
    color: #b3c378; //greenish
    text-align: center;
    font-variant: small-caps;
    font-weight: bolder;
    font-size: large;
    width: ${props => props.inputWidth || "80px"};
        
      &:hover{
        color: green;
        background: white;
        transition: ease-in-out 0.3s; 
      }
      &:disabled{
        background:grey;
        transition: ease-in-out 0.3s; 
      }
  `;

