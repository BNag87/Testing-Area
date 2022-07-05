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

    //convert data in to an array
    const objInnerValues = Object.values(jsonData.effects)

    const randRanged = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }


    //function to grab and spit out a random spell effect
    const randomEffect = () => {
        console.log("Need to print a random effect!")
        
        //Internal variables
        let var_TextOut = document.getElementById("effectTextBox");
        let var_idIndex, var_idData = 0;

        var_idData = randRanged(0, 9999);
        console.log("Random effect:")
        console.log(var_idData)

        for (let i = 0; i < 9999; i++) 
        {
            if (objInnerValues[i] == var_idData) {
                var_TextOut.innerHTML = ("Effect " + var_idData+ ": " +String(objInnerValues[i+1]))
            }    
        }

    }

    return(
        <>

        <InvisiDiv inputHeight="100vh">

            <Wrapper inputWidth="80%">
                {/* WRAPPER CONTENT - CONTAINS ALL ELEMENTS */}
            
                <Table inputWidth = "100%">
                    
                    <TableHead>
                        {/* TABLE TITLE */}
                        <TableRow>
                            <SuperTH colSpan={4}>
                                <h2>Random Spell Failures</h2>
                            <hr/>  

                            <InvisiDiv>
                                <TextArea id="effectTextBox" inputWidth="250px" inputHeight="50px"/>
                                <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "40px" onClick = {() => randomEffect()}>
                                    ?
                                </Button>
                            </InvisiDiv>

                            <hr/>  
                            
                            </SuperTH>
                        </TableRow>
                        </TableHead>
                    <TableRow>
                        <SuperTH>This is a SUPERTH tag</SuperTH>
                        <SuperTD>This is a SUPERTD tag</SuperTD>
                        <SuperTH>This is a 2nd SUPERTH tag</SuperTH>
                        <SuperTD>This is a 2Nd SUPERTD tag</SuperTD>
                        
                    </TableRow>
                </Table>
            </Wrapper>
        
        </InvisiDiv>
        
        </>
    )
}