import React from 'react';
import ReactTooltip from "react-tooltip";

import { 
    Wrapper,
    Table,
    TableHead,
    TableRow,
    SuperTH,
    SuperTD,
    Button,
    TextInput,
    TextArea,
    Box, 
    
    } from "../../styles";

import { ToolTip } from '../Minor Components/C-Tooltip';

//Need to create a basic display for shop data.

//==========----------→COMPONENT STARTS HERE
export const MerchantGenerator = () => {
//WELCOME TO A NEW DAY! YOU'RE ALMOST THERE! 
//Fix the issue with the table generation! Generates sideways!

    //get the json data
    const jsonData = require("../Reference Files/Json Files/shops.json");

    // console.log("'Object.values()' of jsonData.shops[0]:");
    const objInnerValues = Object.values(jsonData.shops)
    // console.log(objInnerValues);

    // for(let i = 1; i < dummy.length; i++)
    //     {
    //         console.table(dummy[i]);
    //         // for(let x = 1; x < dummy[i].length; x++)
    //         // {
    //         //     console.log("Spitting 'dummy["+i+"]["+x+"]': \n"+dummy[i][x].item);                
    //         // }
    //     }
    
    const BarkItemBlurb = (input) => {
        console.log ("Barkitemblurb was fired with the input: " +input);
        console.log("\n"+objInnerValues[0][input].item + "\n" + objInnerValues[0][input].blurb)
    }

    function BarkBlurb(ItemInput, BlurbInput)
    {
        let box = document.getElementById("blurbBox");
        box.value = (ItemInput + ".\n"+ BlurbInput);
    }

    function tooltip(itemName, itemBlurb)
    {
        console.log("tooltip was fired with: " +itemName+ ", " +itemBlurb);
        return(
            <Box>{itemName}, {itemBlurb}</Box>
            
        )
    }

    //==========----------→COMPONENT RETURN BLOCK STARTS HERE
        return(
            <>
            <Wrapper>
                <h2>Merchant Generator</h2>
                <Table inputWidth = "auto">
                    
                    <TableHead>
                            <TableRow>
                            <SuperTH colSpan={6}>
                                <h2>Merchant Table</h2>
                                <hr/>
                                <h4>Blacksmith/Armoury</h4>
                                <Button
                                inputBackground = "#222222"
                                inputColor = "#cccccc"
                                inputFontSize = "normal"
                                inputFontVariant = "normal"
                                inputWidth = "auto">
                                    Blacksmith
                                </Button>
                                <Button
                                inputBackground = "#222222"
                                inputColor = "#cccccc"
                                inputFontSize = "normal"
                                inputFontVariant = "normal"
                                inputWidth = "auto">
                                    Fletcher
                                </Button>
                                <hr/> 
                                <TextArea 
                                    id = "blurbBox" 
                                    disabled = {true} 
                                    inputHeight = "80px" 
                                    inputWidth = "350px"
                                    inputTextAlign = "center"
                                    inputJustify = "center"
                                    inputDBG = "#242442"
                                    inputDFC = "white"
                                    inputDBorder = "3px grey inset"
                                    inputDMargin = "0px 0px 3px 0px"
                                    placeholder = "Click an item below to see its description here"
                                    />
                            </SuperTH>
                            </TableRow>

                            <TableRow>
                                <SuperTH>Item</SuperTH>
                                <SuperTH>Category</SuperTH>
                                <SuperTH>Weight</SuperTH>
                                <SuperTH>Low Price</SuperTH>
                                <SuperTH>Avg Price</SuperTH>
                                <SuperTH>Max Price</SuperTH>
                            </TableRow>

                            {/* ARRAY MAPPING! */}
                            {objInnerValues[0].map((thing, outerIndex) => (
                            
                            // Ternary operator to stop creating rows from element 0
                            (outerIndex == 0) ? console.log("outerIndex WAS 0") : (outerIndex %2 == 0) ? 
        
        Object.values(thing).map((innerThing, innerIndex) => (
            <>
                <TableRow
                onMouseOver={ () => tooltip(innerThing[2], innerThing[9]) } 
                inputBackgroundColour="#2b3e24" 
                inputFontColour = "#dddddd" 
                key = {thing[0].toString()}
                onClick={() => BarkBlurb(innerThing[2],innerThing[9])}>
                    {/* Tooltip popup for item blurb */}


                    {/* Indidivual td elements to display each item */}
                    <SuperTD NoHoverTD>{innerThing[2]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[1]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[8]}lbs</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[3]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[4]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[5]}gp</SuperTD>
                </TableRow>

            </>
        ))
:
        Object.values(thing).map((innerThing, innerIndex) => (
            <>
                <TableRow 
                inputBackgroundColour="#555555" 
                inputFontColour = "#dddddd" 
                key = {thing[0].toString()} 
                onClick={() => BarkBlurb(innerThing[2],innerThing[9])}>
                      
                    <SuperTD NoHoverTD>{innerThing[2]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[1]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[8]}lbs</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[3]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[4]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[5]}gp</SuperTD>

                </TableRow>
            </>
                        )
                    )
                )
            )
}

                    </TableHead>
                </Table>
            </Wrapper>
            </>
    )
}