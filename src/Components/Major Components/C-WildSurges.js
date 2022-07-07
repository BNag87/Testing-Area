import React, { useState } from 'react';

import { 
    Wrapper,
    Table,
    TableRow,
    TableHead,
    SuperTH,
    SuperTD,
    Button,
    TextArea,
    TextInput,
    H3,
    InvisiDiv,
    } from "../../styles";

//==========----------→COMPONENT STARTS HERE
export const WildSurges = () => {

//==========----------→ ↓USESTATES HERE↓ ←---------==========
    // usestate to track random effects when generated
    const [randEffect, setRandEffect] = useState("");

//==========----------→ ↓JSON IMPORTS/CONVERSIONS HERE↓ ←---------==========
    //get the json data
    const jsonData = require("../Reference Files/Json Files/randomEffects.json");

    //convert data
    const objInnerValues = Object.values(jsonData.effects).reduce((acc, cur, index, original) => {
        if(index % 2 === 0) {
          const item = {
            id: cur,
            text: original[index+1]
          };
          acc.push(item);
        }
        return acc;
      }, []);

    const randRanged = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }


    //function to grab and spit out a random spell effect
    const randomEffect = (input) => {
        
        //Internal variables
        let var_Input = parseInt(input);
        let var_TextOut = document.getElementById("effectTextBox");
        let var_IdOut = document.getElementById("dis_PickID");
        let var_idData = 0;

        
        var_idData = randRanged(0, 9999);
        var_IdOut.value = var_idData

        for (let i = 0; i < objInnerValues.length; i++) 
        {
            if (objInnerValues[i] == var_idData) {
                var_TextOut.value = String(objInnerValues[i+1]);
                break;
            }    
        }

    }

    return(
        <>

        <InvisiDiv inputHeight="100vh">

            <Wrapper inputWidth="80%">
                {/* WRAPPER CONTENT - CONTAINS ALL ELEMENTS */}
            
                <Table inputWidth = "100%">
                    {/* TABLE TAG */}

                    <TableHead>
                        {/* TABLEHEAD TAG */}

                        <TableRow>
                            {/* TABLEROW TAG */}
                            <SuperTH colSpan={4}>
                                <h2>Random Spell Failures</h2>
                                Click the '?' button or type in the result of a d10000 roll to find a random spell effect. These can be used as Wild magic surges or just for random spell effects as needed by a DM.
                            <hr/>  

                            <InvisiDiv inputMargin="15px 0px 0px 10px">
                                {/* Text input for ID number of record. Can be manually input too */}
                                <TextInput    
                                    id = "dis_PickID"  
                                    inputWidth="10%" 
                                    inputHeight="50px"
                                    inputBorderRadius="8px 0px 0px 8px"
                                    inputBackgroundColour="White"
                                    inputFontSize="18px"
                                    inputFontWeight="bolder"
                                    inputFontFamily="courier" 
                                />

                                {/* Text input for string describing effect */}
                                <TextInput 
                                    id="effectTextBox" 
                                    inputWidth="75%" 
                                    inputHeight="50px" 
                                    inputTextAlign="center" 
                                    inputFontSize="18px" 
                                    inputFontWeight="bolder" 
                                    disabled={true}/>
                                
                                <Button 
                                    inputBackground = "#222222" 
                                    inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" 
                                    inputColor = "#cccccc" 
                                    inputFontSize = "normal" 
                                    inputFontVariant = "normal" 
                                    inputWidth = "40px" 
                                    onClick = {() => randomEffect()}>
                                    ?
                                </Button>
                            </InvisiDiv>

                            <hr/>  
                            
                            </SuperTH>
                        </TableRow>
                                
                {/* ARRAY MAPPING! FIRST MAP===============================================================*/}
                    {
                        objInnerValues.map((thing) => (
                            <>
                            <TableRow NoHoverTR>
                            <SuperTH>{thing.id}</SuperTH>
                            <SuperTD NoHoverTD>{thing.text}</SuperTD>
                            </TableRow>
                            </>
                        ))
                    }
                    </TableHead>
                </Table>
            </Wrapper>
        
        </InvisiDiv>
        
        </>
    )
}