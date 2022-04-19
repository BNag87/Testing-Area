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
                            <SuperTH colSpan={5}>
                                <h2>Merchant Table</h2>
                                <h4>Blacksmith/Armoury</h4> 
                            </SuperTH>
                            </TableRow>

                            <TableRow>
                                <SuperTH>Item</SuperTH>
                                <SuperTH>Weight</SuperTH>
                                <SuperTH>Low Price</SuperTH>
                                <SuperTH>Avg Price</SuperTH>
                                <SuperTH>Max Price</SuperTH>
                            </TableRow>

                            <TableRow>
                            <>
                            {/* THIS GIVES THE SHOP TYPE */}
                                <SuperTH>objInnerValues[0][1][1][1]</SuperTH>
                                <SuperTD colSpan={4}>{objInnerValues[0][1][1][1]}</SuperTD>                               
                            </>
                            </TableRow>

                            {/* THIS MAPS THE OBJECT. OBJECTS NEED TO BE MADE TO ARRAYS, THEN MAPPED */}
                            {objInnerValues[0].map((thing, outerIndex) => (

                            Object.values(thing).map((innerThing, innerIndex) => (
                        <>
                        <TableRow key = {thing[0].toString()}>
                        {console.log("Key for tablerow was "+ thing[0][0].toString())}
                                    <SuperTD>
                                        {innerThing[2]}
                                        {console.log("\nouter/inner: "+outerIndex +", " +innerIndex)}
                                        {console.log("\nData: "+innerThing[2] +", " +innerThing[8] + ", " +innerThing[3]+", " + innerThing[4]+", "+innerThing[5])}
                                    </SuperTD> 
                                    
                                    <SuperTD>{innerThing[8]}lbs</SuperTD>
                                    <SuperTD>{innerThing[3]}gp</SuperTD>
                                    <SuperTD>{innerThing[4]}gp</SuperTD>
                                    <SuperTD>{innerThing[5]}gp</SuperTD>
                            </TableRow>
                        </>
                                    ))

                                )
                                )
                            }

    </TableHead>
    </Table>
    </Wrapper>
    </>
    )
}