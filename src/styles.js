import styled, { createGlobalStyle, css } from "styled-components";

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

export const SuperTH = styled.th`
background: black;
color: white ;
font-variant: small-caps;
padding: 0px 10px 0px 10px;
`;

export const TableHead = styled.thead`
border: solid white;
background: black;
color: white ;
font-variant: small-caps;
`;

export const SuperTD = styled.td`
padding-left:5px;

&:hover{
  color: green;
  background: darkgray;
  transition: ease-in-out 0.3s; 
}`

export const TableRow = styled.tr`
  border: 20px solid white; 
  background: green;
  color: white;
  `;

  // ==========-------------------- INPUT STYLES
  export const TextInput = styled.input`
    text-align:center;
    font-size: ${props => props.inputFontSize || "900"};
    font-style: ${props => props.inputFontStyle || "bold"};;
    background: white;
    color: black;
    padding: ${props => props.inputPadding || "5px"};
    margin: ${props => props.inputMargin || "-3px 0px 5px 0px"};
    border: none;
    width: ${props => props.inputWidth || "80px"};
    height: ${props => props.inputHeight || "auto"};

    &:disabled{
    background: darkgray;
    color: black;
    transition: ease-in-out 0.3s;
    }
    `;

    export const TextArea = styled.textarea`
      text-align:left;
      font-size: ${props => props.inputFontSize || "900"};
      background: white;
      color: black;
      padding: ${props => props.inputPadding || "5px"};
      margin: ${props => props.inputMargin || "5px 0px 5px 0px"};
      border: none;
      border-radius: 5px 5px 5px 5px;
      width: ${props => props.inputWidth || "430px"};
      height: ${props => props.inputHeight || "125px"};
      resize: none;

      &:disabled{
      background: beige;
      color: black;
      box-shadow: 2px 3px rgba(0,0,0,0.34);
      transition: ease-in-out 0.3s;
    }
    `;


  export const Button = styled.button`
  
    border: red 1px solid;
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
    cursor: pointer;

      &:hover{
        color: green;
        background: white;
        transition: ease-in-out 0.3s; 
      }
      &:disabled{
        background: darkgreen;
        color: green;
        transition: ease-in-out 0.3s; 
      
        &:hover{
        color: darkgreen;
        background: darkgreen;
        transition: ease-in-out 0.3s; 
      }
      }

      ${props => props.NoHoverButton && css`
      color: #b3c378;

      &:hover {
          color: #b3c378;
          background: #b368a3;
        }
    `}

`;