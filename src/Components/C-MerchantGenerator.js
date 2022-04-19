import React from 'react';

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
    
    } from "../styles";

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
                                <h4>Blacksmith/Armoury</h4> 
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
                <TableRow inputBackgroundColour="#2b3e24" inputFontColour = "#dddddd" key = {thing[0].toString()}>
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
                <TableRow inputBackgroundColour="#555555" inputFontColour = "#dddddd" key = {thing[0].toString()}>
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