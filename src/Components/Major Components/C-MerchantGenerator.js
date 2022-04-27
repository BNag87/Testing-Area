import React, { useState, useEffect } from 'react';

import { 
    Wrapper,
    Table,
    TableHead,
    TableRow,
    SuperTH,
    SuperTD,
    Button,
    H3,
    InvisiDiv,
    } from "../../styles";

import Tooltip from "@mui/material/Tooltip"

//==========----------→COMPONENT STARTS HERE
export const MerchantGenerator = () => {

    // create usestate to track what index is being used for rendering shop data
    const [shopIndex, setShopIndex] = useState(0);
    let shopInd = 0;
    
    //get the json data
    const jsonData = require("../Reference Files/Json Files/shops.json");

    //convert data in to an array
    const objInnerValues = Object.values(jsonData.shops)
    
    //console log to spit out specific inputs
    const BarkItemBlurb = (input) => {
        console.log ("Barkitemblurb was fired with the input: " +input);
        console.log("\n"+objInnerValues[0][input].item + "\n" + objInnerValues[0][input].blurb)
    }

    //function that handles onclick function of buttons that change the shop type the user is viewing. auto sorts and generates!
    const ChangeMerchant = (input) => {
        setShopIndex(input)
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
                                <h2>Merchant Items Table</h2>
                                <hr/>
                                <InvisiDiv>
                                    Shop Type: <H3>{objInnerValues[shopIndex][0]}</H3>
                                </InvisiDiv>
                                <Button
                                inputBackground = "#222222"
                                inputColor = "#cccccc"
                                inputFontSize = "normal"
                                inputFontVariant = "normal"
                                inputWidth = "auto"
                                onClick = {() => ChangeMerchant(0)}>
                                    
                                    Blacksmith
                                
                                </Button>
                                
                                <Button
                                inputBackground = "#222222"
                                inputColor = "#cccccc"
                                inputFontSize = "normal"
                                inputFontVariant = "normal"
                                inputWidth = "auto"
                                onClick = {() => ChangeMerchant(1)}>
                                
                                    Fletcher
                                
                                </Button>
                                
                                <Button
                                inputBackground = "#222222" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "auto"
                                onClick = {() => ChangeMerchant(2)}>
                                    Leatherworker
                                </Button>

                                <Button
                                inputBackground = "#222222" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "auto"
                                onClick = {() => ChangeMerchant(3)}>
                                    Temple
                                </Button>

                                <Button
                                inputBackground = "#222222" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "auto"
                                onClick = {() => ChangeMerchant(4)}>
                                    Bookseller
                                </Button>

                                <Button
                                inputBackground = "#222222" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "auto"
                                onClick = {() => ChangeMerchant(5)}>
                                    General Store
                                </Button>

                                <hr/> 
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
                            {objInnerValues[shopIndex].map((thing, outerIndex) => (
                            
                            // Ternary operator to stop creating rows from element 0
                            (outerIndex == 0) ? console.log("outerIndex WAS 0") : (outerIndex %2 == 0) ? 
        
        Object.values(thing).map((innerThing, innerIndex) => (
            <>
            {/* Tooltip popup for item blurb */}
                <Tooltip 
                title={innerThing[9]} 
                arrow   
                placement="top"
                followCursor={true}
                >
            {/* Table rows for each record */}
                <TableRow
                inputBackgroundColour="#331B18" 
                inputFontColour = "#aaaaaa" 
                key = {thing[0].toString()}
                >
                    
                

                    {/* Indidivual td elements to display each item */}
                    <SuperTD NoHoverTD>{innerThing[2]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[1]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[8]}lbs</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[3]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[4]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[5]}gp</SuperTD>
                </TableRow>
                </Tooltip>
            </>
        ))
:
        Object.values(thing).map((innerThing, innerIndex) => (
            <>
                {/* Tooltip popup for item blurb */}
                <Tooltip 
                title={innerThing[9]} 
                arrow   
                placement="top"
                followCursor={true}
                >

                <TableRow 
                inputBackgroundColour="#1c1122" 
                inputFontColour = "#bbbbbb" 
                key = {thing[0].toString()} 
                >
                      
                    <SuperTD NoHoverTD>{innerThing[2]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[1]}</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[8]}lbs</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[3]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[4]}gp</SuperTD>
                    <SuperTD NoHoverSmallTxtTD>{innerThing[5]}gp</SuperTD>

                </TableRow>
                </Tooltip>
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