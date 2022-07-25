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

        //short version of console.log
        const bark = (input) => {
            console.log(input);
        }

//==========----------→ ↓JSON IMPORTS/CONVERSIONS HERE↓ ←---------==========
    //get the json data
    const jsonData = require("../Reference Files/Json Files/randomEffects.json");

    //convert data

    const allValues = Object.values(jsonData.effects);

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

    // for display/pagination, split the huge array into twenty arrays of 500
    let AR_pag1 = objInnerValues.splice(0,500)
    let AR_pag2 = objInnerValues.splice(0,500)
    let AR_pag3 = objInnerValues.splice(0,500)
    let AR_pag4 = objInnerValues.splice(0,500)
    let AR_pag5 = objInnerValues.splice(0,500)
    let AR_pag6 = objInnerValues.splice(0,500)
    let AR_pag7 = objInnerValues.splice(0,500)
    let AR_pag8 = objInnerValues.splice(0,500)
    let AR_pag9 = objInnerValues.splice(0,500)
    let AR_pag10 = objInnerValues.splice(0,500)
    let AR_pag11 = objInnerValues.splice(0,500)
    let AR_pag12 = objInnerValues.splice(0,500)
    let AR_pag13 = objInnerValues.splice(0,500)
    let AR_pag14 = objInnerValues.splice(0,500)
    let AR_pag15 = objInnerValues.splice(0,500)
    let AR_pag16 = objInnerValues.splice(0,500)
    let AR_pag17 = objInnerValues.splice(0,500)
    let AR_pag18 = objInnerValues.splice(0,500)
    let AR_pag19 = objInnerValues.splice(0,500)
    let AR_pag20 = objInnerValues.splice(0,500)

    // array for storing arrays above
    let AR_concSplits = [];  
    AR_concSplits.push(
        AR_pag1, AR_pag2, AR_pag3, AR_pag4, AR_pag5, AR_pag6, AR_pag7, AR_pag8, AR_pag9, AR_pag10,
        AR_pag11, AR_pag12, AR_pag13, AR_pag14, AR_pag15, AR_pag16, AR_pag17, AR_pag18, AR_pag19, AR_pag20
        );

    //function to get a random number between to specific numbers
    const randRanged = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    //function to grab and spit out a random spell effect
    const getRecord = (input) => {
    
        //find the right array first.
        //each one contains 500, soo divide input by 500

        //input will be the item index. use that to pick the right array
        let index = Math.floor(input/500);
        let targetArray = AR_concSplits[index];
        let IDin = parseInt(input);
        let value = "";

        try{
            for(let i=0; i < targetArray.length; i++)
            {
                
                if(parseInt(targetArray[i].id) === IDin)
                {
                    value = String(targetArray[i].text);
                    break;
                }
            }
        }
        catch(error)
        {
            bark("===============\nToilet blocked in getRecord function: ");
            bark(error);
            bark("\n===============");
        }
        return value;

    }

    //onclick function, updayes display fields with random effect/id
    const randomEffect = () => {
        //Internal variables
        let var_TextOut = document.getElementById("effectTextBox");
        console.log(var_TextOut);
        let var_IdOut = document.getElementById("dis_PickID");
        let var_idData = randRanged(0, 9999);

        try
            {
                var_IdOut.value = var_idData;
                var_TextOut.value = getRecord(var_idData);
            }
        catch(error){
            bark("Bowel explosion in onclick function:");
            bark(error);
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
                                    onClick = {() => randomEffect(0)}>
                                    ?
                                </Button>
                            </InvisiDiv>

                            <hr/>  
                            
                            </SuperTH>
                        </TableRow>
                                
                {/* ARRAY MAPPING! FIRST MAP===============================================================*/}
                    {/* {
                        objInnerValues.map((thing) => (
                            <>
                            <TableRow NoHoverTR>
                            <SuperTH>{thing.id}</SuperTH>
                            <SuperTD NoHoverTD>{thing.text}</SuperTD>
                            </TableRow>
                            </>
                        ))
                    } */}

                    <SuperTD NoHoverTD colSpan={2}>
                    
                    </SuperTD>
                    
                    </TableHead>
                </Table>
            </Wrapper>
        
        </InvisiDiv>
        
        </>
    )
}