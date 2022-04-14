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
//Just need to figure out how to navigate the data structure properly.
//You got the blurb for items but it was searching through each array
//one at a time without looking through each object entry!

    //get the json data
    const jsonData = require("../Reference Files/Json Files/shops.json");

    // console.log("'Object.values()' of jsonData.shops[0]:");
    const objInnerValues = Object.values(jsonData.shops[0])
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

                            
                                
                            {
                                objInnerValues.map((things, i) => (
                                   
                                    <TableRow key= {i} onClick={() => BarkItemBlurb(i)}>

                                    {Object.keys(things).map((eachThing) => (
                                        <>
                                    <SuperTD>{eachThing.item}lbs</SuperTD>
                                    <SuperTD>{eachThing.weight}lbs</SuperTD>
                                    <SuperTD>{eachThing.low_price}gp</SuperTD>
                                    <SuperTD>{eachThing.med_price}gp</SuperTD>
                                    <SuperTD>{eachThing.high_price}gp</SuperTD>
                                        </>
                                    ))}
                                    </TableRow>
                                    )
                                )
                            }
                    </TableHead>
                </Table>
            </Wrapper>
            </>
        )
}