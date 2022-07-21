import styled, { createGlobalStyle, css } from "styled-components";
import visIcon from "./Components/Reference Files/Images/visibilityOff.png"
import visIconShow from "./Components/Reference Files/Images/visibilityOn.png"

import d4Gif from "./Components/Reference Files/Images/d4.gif"



// ==========-------------------- GLOBAL STYLES
export const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(82,169,139,1) 40%, rgba(255,255,255,1) 100%);
  margin: 0;
  padding: 0;
  font-family: calibri;
}
`;

// ==========-------------------- HEADER STYLES
export const InvisiDiv = styled.div`
display: flex;

background: ${props => props.inputBackground || "none"};
border: ${props => props.inputBorder || "none"};
border-radius: ${props => props.inputRadius || "none"};

align-items: ${props => props.inputAlignItems || "center"};
justify-content: ${props => props.inputJustifyContent || "center"};
text-align: ${props => props.inputTextAlign || "center"};

width: ${props => props.inputWidth || "auto"};
height: ${props => props.inputHeight || "auto"};
z-index: ${props => props.Z || "5"};

padding: ${props => props.inputPadding || "0px"};
margin: ${props => props.inputMargin || "0px"};

${props => props.d4Div && css`
background: url(${d4Gif});
`}

${props => props.IconDiv && css`
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
      text-align: inherit;
      background: url(${visIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      color: ${props => props.inputColour || "rgb(200,200,200)"};
      border-radius: 4px;
      margin: 1px;
      padding: 1px;
      width: 10px;
      &:hover {
          color: white;
          background: rgba(255,255,255,0.3); 
        }
    `}
`
export const H3 = styled.div`
background: ${props => props.inputBackgroundColour || "rgba(255,255,255,0.05)"};
color: ${props => props.inputColour || "rgb(200,200,200)"};
border: ${props => props.inputBorder || "inset 3px grey"};
border-radius: 10px;
margin: ${props => props.inputMargin || "5px"};
padding: ${props => props.inputPadding || "5px"};
width: 180px;
align-items: center;
justify-content: center;
font-size: ${props => props.inputFontSize || "14px"};
font-weight: ${props => props.inputFontWeight || "medium"};
text-shadow: ${props => props.inputFontShadow || "none"};
font-variant: ${props => props.inputFontVariant || "none"};

${props => props.ForTH && css`
  border: none;
  background: none;
  padding: 0px;
  font-size: 18px;
  font-variant: small-caps;
  `}

`
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
    z-index: ${props => props.Z || "5"};

    background:${props => props.inputFlexDirection || "rgb(100,200,200)"};
`;

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
  
    width: ${props => props.inputWidth || "100%"};
    height: ${props => props.inputHeight || "15%"};
    margin: ${props => props.inputMargin || "0px"};
    padding: ${props => props.inputPadding || "20px"};
    border-bottom: solid white 5px;
    background: rgba(100,200,250, 0.8);
        position: fixed;
    z-index: ${props => props.Z || "5"};

    
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
border: 3px outset grey;
width: ${props => props.inputWidth || "300px"}
`;

export const SuperTH = styled.th`
background: ${props => props.inputBackgroundColour || "black"};
color: ${props => props.inputFontColour || "white"};

width: ${props => props.inputWidth || "20%"};
height: ${props => props.inputHeight || "auto"};

font-variant: small-caps;

padding: 0px -5px 0px -5px;
`;

export const TableHead = styled.thead`
/* border: outset white; */
background: black;
color: white;
font-variant: small-caps;
width: ${props => props.inputWidth || "auto"};
`;

export const SuperTD = styled.td`
padding: 2px 5px 2px 5px;
width: ${props => props.inputWidth || "80px"};
height: ${props => props.inputHeight || "auto"};

${props => props.NoHoverTD && css`
  font-weight: bold;
  }
`}

${props => props.NoHoverSmallTxtTD && css`
      font-variant: none;
      font-family: consolas;
      font-size: smaller;
  }
`}
`;

export const TableRow = styled.tr`
  background: ${props => props.inputBackgroundColour || "white"};
  color: ${props => props.inputFontColour || "white"};
  height: ${props => props.inputHeight || "auto"};
      &:hover {
          color: #FFD700; //gold
          background: #b368a3; //blue
          transition: ease-in-out 0.3s;
      }

      ${props => props.NoHoverTR && css`
      background: lightcyan; //blue
      color: #b3c378; //greenish
      &:hover {
          color: none; //greenish
          background: none; //blue
        }
    `}

  `;
  // ==========-------------------- INPUT STYLES
  export const TextInput = styled.input`
    text-align: center;
    font-size: ${props => props.inputFontSize || "16px"};
    font-style: ${props => props.inputFontStyle || "bolder"};
    font-family: ${props => props.inputFontFamily || "inherit"};
    background: ${props => props.inputBackgroundColour || "#b368a3"};
    color: ${props => props.inputColour || "black"};
    padding: ${props => props.inputPadding || "5px"};
    margin: ${props => props.inputMargin || "-3px 0px 5px 0px"};
    border: ${props => props.inputBorder || "-3px 0px 5px 0px"};
    border-radius: ${props => props.inputBorderRadius || "none"};
    width: ${props => props.inputWidth || "80px"};
    height: ${props => props.inputHeight || "auto"};
    &:disabled{
    background: #b368a3;
    color: black;
    transition: ease-in-out 0.3s;
    }
    `;
    export const TextArea = styled.textarea`
      text-align: ${props => props.inputTextAlign || "left"};
      justify-content: ${props => props.inputJustify || "flex-start"};
      font-size: ${props => props.inputFontSize || "900"}; 
      font-weight: ${props => props.inputFontWeight || "normal"};
      background: ${props => props.inputDBG || "rgba(255, 255, 255, 0.25)"};
      color: ${props => props.inputDFC || "white"};
      padding: ${props => props.inputPadding || "5px"};
      border: ${props => props.inputDBorder || "inset rgba(255,255,255,0.9) 4px"};
      margin: ${props => props.inputDMargin || "20px"};
      border-radius: 5px 5px 5px 5px;
      width: ${props => props.inputWidth || "430px"};
      height: ${props => props.inputHeight || "125px"};
      resize: none;

      &:disabled{
      background: ${props => props.inputDBG || "rgba(255, 255, 255, 0.15)"};
      color: ${props => props.inputDFC || "white"};
    
      border: ${props => props.inputDBorder || "inset rgba(255,255,255,0.4) 4px"};
      margin: ${props => props.inputDMargin || "20px"};
      box-shadow: 2px 3px rgba(0,0,0,0.34);
      transition: ease-in-out 0.3s;
    }
    `;
  export const Button = styled.button`

    background: ${props => props.inputBackground || "rgba(179 ,104 ,163 ,1)"}; //blue
    color: ${props => props.inputColor || "#b3c378"}; //greenish

    border: ${props => props.inputBorder || "red 1px solid"};
    border-radius: ${props => props.inputRadius || "5px 3px 5px 3px"};
    box-shadow: ${props => props.inputBoxShadow || "2px 2px rgba(0,0,0,0.4)"};
    text-align: center;

    padding: ${props => props.inputPadding || "10px 10px 10px 10px"};
    margin: ${props => props.inputMargin || "3px 3px 3px 3px"};
    
    font-variant: ${props => props.inputFontVariant || "small-caps"};
    font-weight: ${props => props.inputFontWeight || "bolder"};
    font-size: ${props => props.inputFontSize || "large"};
    width: ${props => props.inputWidth || "80px"};
    height: ${props => props.inputHeight || "auto"};
    cursor: pointer;

      &:hover{
        color: ${props => props.inputHColour || "green"};
        background: ${props => props.HBackground || "white"};
        transition: ease-in-out 0.3s; 
      }
      &:disabled{
        background: darkgreen;
        color: green;
        transition: ease-in-out 0.3s; 
        cursor: not-allowed;
        &:hover{
        color: darkgreen;
        background: darkgreen;
        transition: ease-in-out 0.3s; 
      }
      }
    
      ${props => props.NoHoverButton && css`
      background: lightcyan; //blue
      color: #b3c378; //greenish
      &:hover {
          color: #b3c378; //greenish
          background: #b368a3; //blue
        }
    `}

    ${props => props.HideButton && css`
    background-image: url(${visIcon});
    background-color: rgba(200,190,190, 0.2); //blue
    border: ${props => props.inputBorder || "rgba(255, 255, 255, 0.2) 1px solid"};
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    
      width: 20px;
      height: 20px;    
      padding: 1px;
      margin: 3px;

      &:hover {
        background: url(${visIcon});
        background-color: #dddddd; //blue
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        }
    `}
    
    ${props => props.ShowButton && css`
    
    background-image: url(${visIconShow});
    background-color: rgba(200,190,190, 0.2); //blue
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    border: ${props => props.inputBorder || "rgba(255, 255, 255, 0.2) 1px solid"};
    width: 20px;
    height: 20px;    
    padding: 1px;
    margin: 3px;

      &:hover {
        background: url(${visIconShow});
        background-color: #eeeeff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        }
    `}

    ${props => props.PageButton && css`
    border-radius: 100px; 
    background: rgba(255,255,255,0.2);
    border: none;
    color: white;
    width: 45px;
    height: 45px;
    
      &:hover {
        background: rgba(255,255,255,0.5);
        color: black;
      }
    `}
`;