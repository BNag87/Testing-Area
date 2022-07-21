import React, { useState } from 'react';

import { 
    Wrapper,
    Table,
    TableRow,
    TableHead,
    SuperTH,
    SuperTD,
    Button,
    TextInput,
    InvisiDiv,
    } from "../../styles";

    import {  FirstPage, LastPage } from '@mui/icons-material';
    import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
    import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//==========----------→COMPONENT STARTS HERE
export const WildSurges = () => {

//==========----------→ ↓USESTATES HERE↓ ←---------==========
    //useState to choose an effect array to map through for display
    const [ST_ArrayMarker, set_ST_ArrayMarker] = useState(1);

//==========----------→ ↓GENERIC FUNCTIONS HERE↓ ←---------==========
    //short version of console.log
    const bark = (input) => {
        console.log(input);
    }

    //create and return a random number between two inputs
    const randRanged = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

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

    // for display/pagination, split the huge array into twenty arrays of 50
    // each array will contain the entirety of the massive array, used for pagination
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
    AR_concSplits.push(AR_pag1, AR_pag2, AR_pag3, AR_pag4, AR_pag5, AR_pag6, AR_pag7, AR_pag8, AR_pag9, AR_pag10,
                       AR_pag11, AR_pag12, AR_pag13, AR_pag14, AR_pag15, AR_pag16, AR_pag17, AR_pag18, AR_pag19, AR_pag20);

                       
//FUNCTIONS BLOCK===============================================================

// get random magical effect (plus ID number)
    const getRecord = (input) => {
    
        //find the right array first.
        //each one contains 500, so divide input by 500

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

//display random magical effect
    const randomEffect = () => {
        
        //Internal variables
        let var_TextOut = document.getElementById("effectTextBox");
        let var_IdOut = document.getElementById("dis_PickID");
        let var_idData = randRanged(0, 9999);

        try
            {
                var_IdOut.value = var_idData;
                var_TextOut.value = getRecord(var_idData);
            }
        catch(error){
            bark("Bowel explosion in click:");
            bark(error);
        }
    }

//ONCLICK FUNCTIONS BLOCK===============================================================
    //used to change the 'page number' of a map block to display records        
const setPage = (input) => {
    try{
    let pos = ST_ArrayMarker;

    switch(input)
    {
        case "next":            
            pos++;
            set_ST_ArrayMarker(pos);

            if((pos) >= 21)
            {
                pos=20;
                set_ST_ArrayMarker(pos);
            }  
            else if((pos) <= 1)
            {
                pos=1;
                set_ST_ArrayMarker(pos);
            }

            break;

        case "last":
            pos=20;
            set_ST_ArrayMarker(pos);
            break;

        case "prev":
            pos--;
            set_ST_ArrayMarker(pos);
            
            if((pos) >= 21)
            {
                pos=20;
                set_ST_ArrayMarker(pos);
            }  
            else if((pos) <= 1)
            {
                pos=1;
                set_ST_ArrayMarker(pos);
            }

            break;

        case "first":
            pos=1;
            set_ST_ArrayMarker(pos);
            break;
        default:
            break;
    }
}
    
    catch(e)
    {
        bark("Bowel obstruction in setPage function:")
        bark(e)
    }
    }

//COMPONENT RETURN BLOCK===============================================================

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
                                Click the '?' button to find a random spell effect. These can be used as Wild magic surges or just for random spell effects as needed by a DM.
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
                                    inputRadius = "0px 8px 8px 0px"
                                    inputColor = "#cccccc" 
                                    inputMargin= "0px 10px 8px 0px"
                                    inputFontSize = "normal" 
                                    inputFontVariant = "normal" 
                                    inputWidth="50px" 
                                    inputHeight="64px" 
                                    onClick = {() => randomEffect()}>
                                    ?
                                </Button>
                            </InvisiDiv>

                            <hr/>  
                            
                            </SuperTH>
                        </TableRow>
                                
{/* ARRAY MAPPING! FIRST MAP===============================================================*/}
{/* { AR_concSplits[(ST_ArrayMarker-1)].map((thing, index) => (

    
        <TableRow NoHoverTR inputHeight="20px" inputBackgroundColour="gray" inputFontColour="black">
        
        <> 
            <SuperTH key={"ID"+index}>
                {thing.id}
            </SuperTH>
            <SuperTD NoHoverTD inputBackground="black">
                {thing.text}
            </SuperTD>
            </TableRow>
        </>
        )} */}



                <TableRow>
                    <SuperTH colSpan={4}>
                    <InvisiDiv 
                        inputWidth="auto" 
                        inputBackground="none"
                        inputBorder="none"
                        inputFlexDirection="row"
                        >
                    {/* PAGINATION FEATURE */}

                        <InvisiDiv 
                            inputWidth="auto" 
                            inputBackground="rgba(255, 255, 255, 0.1)" 
                            inputBorder="solid rgba(255,255,255,0.2) 2px"
                            inputRadius="100px"
                            inputMargin="10px 0px 10px 0px">

                            <Button PageButton onClick={() => setPage("first")}> 
                                <FirstPage/> 
                            </Button>
                            <Button PageButton onClick={() => setPage("prev")}> 
                                <NavigateBeforeIcon/>
                            </Button>
                                    
                            <TextInput
                            inputBackgroundColour="none"
                            inputBorder="none"
                            inputColour="white"
                            inputPadding="3px"
                            inputMargin="5px"
                            value={"Page "+ST_ArrayMarker+"/20"}/>
                            
                            <Button PageButton onClick={() => setPage("next")}>
                                <NavigateNextIcon/>
                            </Button>
                            <Button PageButton onClick={() => setPage("last")}> 
                                <LastPage/>
                            </Button>
                        </InvisiDiv>

                    </InvisiDiv>    
                    </SuperTH>


                </TableRow>    
                    </TableHead>
                </Table>
            </Wrapper>
        
        </InvisiDiv>
        
        </>
    )
}