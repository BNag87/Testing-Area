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

    console.log("'Object.values()' of items_light_armour:");
    const objInnerValues = Object.values(jsonData.shops[0])
    console.log(objInnerValues);

    const BarkItemBlurb = (input) => {
        console.log ("Barkitemblurb was fired with the input: " +input);
        console.log(dummy[input][input].item + " " + dummy[input][input].blurb)
    }

    //trying a map to log here, see if data is actually being put in an array
    let dummy = objInnerValues.map(x => x);
    console.log("Spitting mapped object: "+dummy[1][1].low_price);



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

                            
                                {objInnerValues.map((things, i) => (
                                    <TableRow 
                                        key= {i} 
                                        onClick={() => BarkItemBlurb(i)}>
                                        <SuperTD>{dummy[i].item}</SuperTD>
                                        <SuperTD>{dummy[i].weight}lbs</SuperTD>
                                        <SuperTD>{dummy[i].low_price}gp</SuperTD>
                                        <SuperTD>{dummy[i].med_price}gp</SuperTD>
                                        <SuperTD>{dummy[i].high_price}gp</SuperTD>
                                    </TableRow>
                            ))}
                            

                            <TableRow>
                                <SuperTD>Some ITEM</SuperTD>
                                <SuperTD>Some WGT</SuperTD>
                                <SuperTD>Some LOW</SuperTD>
                                <SuperTD>Some MED</SuperTD>
                                <SuperTD>Some MAX</SuperTD>
                            </TableRow>

                    </TableHead>
                </Table>
            </Wrapper>
            </>
        )
}