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

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


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

    //A custom MUI tooltip that supports HTML input
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#FFFDD0',
          color: 'rgba(0, 0, 0, 0.67)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(11),
          border: '3px outset #dadde9',
        },
      }));

    //==========----------→COMPONENT RETURN BLOCK STARTS HERE
        return(
            <>
            <Wrapper>
                <h2>Merchant Generator</h2>
                <Table inputWidth = "auto">
                    
                    <TableHead>
                        {/* TABLE TITLE */}
                            <TableRow>
                            <SuperTH colSpan={6}>
                                <h2>Merchant Items Table</h2>
                            <hr/>
                        
                        {/* InvisiDiv is an invisible div wrapper to help align elements */}
                            <InvisiDiv>
                                <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px" onClick = {() => ChangeMerchant(0)}>
                                    Blacksmith
                                </Button>
                                
                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(1)}>
                                    Fletcher
                                </Button>
                                
                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(2)}>
                                    Leatherworker
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(3)}>
                                    Temple
                                </Button>
                            </InvisiDiv>

                            <InvisiDiv>
                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(4)}>
                                    Bookseller
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(5)}>
                                    General Store
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(6)}>
                                    Potions
                                </Button>
                                
                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(7)}>
                                    Magic Shop
                                </Button>
                            </InvisiDiv>

                            <InvisiDiv>
                            <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(8)}>
                                    Inns
                                </Button>

                            <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(9)}>
                                    Marketplace
                                </Button>

                            <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                            onClick = {() => ChangeMerchant(10)}>
                                Jeweler
                            </Button>
                            </InvisiDiv>

                                <hr/> 

                                <InvisiDiv>
                                    Shop Type: <H3>{objInnerValues[shopIndex][0]}</H3>
                                </InvisiDiv>

                                <hr/> 

                            </SuperTH>
                            </TableRow>

                            {/* TABLE HEADINGS */}
                            <TableRow>
                                <SuperTH>Item</SuperTH>
                                <SuperTH>Category</SuperTH>
                                <SuperTH>Weight</SuperTH>
                                <SuperTH>Price Range</SuperTH>
                                <HtmlTooltip title = "Is this item available at this merchant?"  arrow placement="top">
                                    <SuperTH>Avl?</SuperTH>
                                </HtmlTooltip>
                                <HtmlTooltip title = "Is this item in short supply at this merchant?" arrow placement="top">
                                    <SuperTH>Ltd?</SuperTH>
                                </HtmlTooltip>

                            </TableRow>

{/* ARRAY MAPPING! FIRST MAP===============================================================*/}
                            {objInnerValues[shopIndex].map((thing, outerIndex) => (
                            
                            // Ternary operator to stop creating rows from element 0
                            (outerIndex == 0) ? console.log("outerIndex WAS 0") : (outerIndex %2 == 0) ? 
        Object.values(thing).map((innerThing, innerIndex) => (
            <>
            {/* Tooltip popup for item blurb */}
                <HtmlTooltip title={
                    <>
                    <Typography color= "inherit">
                        <b>{innerThing[2]} </b> 
                    </Typography>
                    <hr/>
                    <p><b>{innerThing[9]}</b></p>
                    </>
                    } 
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

                    {/* Ternary operator to change lbs to N/A if weight is 0 as well as characters for 1/2 or 1/4 lbs */}
                    <SuperTD NoHoverSmallTxtTD>{(innerThing[8] !== 0 ? innerThing[8] === 0.25 ?
                    "¼ lb" : innerThing[8] === 0.5 ? 
                    "½ lb" : innerThing[8]+"lbs" : "N/A")}
                        
                        </SuperTD>

                    {/* Nested ternary operators to calculate if an amount is denoted in GP, SP or CP */}
                    <SuperTD NoHoverSmallTxtTD>
                            {
                            (innerThing[3] < 1 && innerThing[3] >= 0.1) ? 
                                Math.floor(innerThing[3] * 10)+"sp" 
                                    : 
                                (innerThing[3] < 0.1 && innerThing[3] >= 0.01) ? 
                                    Math.floor(innerThing[3] * 100)+"cp"
                                        : 
                                    innerThing[3]+"gp"} 
                                    &nbsp;to&nbsp; 
                                    {
                                        (innerThing[5] < 1 && innerThing[5] >= 0.1) ? 
                                            Math.floor(innerThing[5] * 10)+"sp" 
                                            : 
                                            (innerThing[5] < 0.1 && innerThing[5] >= 0.01) ? 
                                                Math.floor(innerThing[5] * 100)+"cp"
                                                : 
                                                innerThing[5]+"gp"
                                    }
                    </SuperTD>

                    {/* Checkbox for if item is available */}
                    <SuperTD>
                        <input type="checkbox" defaultChecked={innerThing[6]}/>
                    </SuperTD>
                    {/* Checkbox for if item is limited */}
                    <SuperTD>
                        <input type="checkbox" defaultChecked={innerThing[7]}/>
                    </SuperTD>

                </TableRow>
                </HtmlTooltip>
            </>
        ))
:
        Object.values(thing).map((innerThing, innerIndex) => (
            <>
                {/* Tooltip popup for item blurb */}

                <HtmlTooltip title={
                    <>
                    <Typography color= "inherit">
                        <b>{innerThing[2]} </b> 
                    </Typography>
                    <hr/>
                    <p><b>{innerThing[9]}</b></p>
                    </>
                    } 
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
                    
                    {/* Ternary operator to change lbs to N/A if weight is 0 */}
                    <SuperTD NoHoverSmallTxtTD>{(innerThing[8] !== 0 ? innerThing[8] === 0.25 ?
                    "¼ lb" : innerThing[8] === 0.5 ? 
                    "½ lb" : innerThing[8]+"lbs" : "N/A")}
                    </SuperTD>

                    {/* Nested ternary operators to calculate if an amount is denoted in GP, SP or CP.
                    Compounds values in to "[CHEAPEST] to [MOST EXPENSIVE]" */}
                    <SuperTD NoHoverSmallTxtTD>
                    {
                            (innerThing[3] < 1 && innerThing[3] >= 0.1) ? 
                                Math.floor(innerThing[3] * 10)+"sp" 
                                    : 
                                (innerThing[3] < 0.1 && innerThing[3] >= 0.01) ? 
                                    Math.floor(innerThing[3] * 100)+"cp"
                                        : 
                                    innerThing[3]+"gp"} 
                                    &nbsp;to&nbsp; 
                                    {
                                        (innerThing[5] < 1 && innerThing[5] >= 0.1) ? 
                                            Math.floor(innerThing[5] * 10)+"sp" 
                                            : 
                                            (innerThing[5] < 0.1 && innerThing[5] >= 0.01) ? 
                                                Math.floor(innerThing[5] * 100)+"cp"
                                                : 
                                                innerThing[5]+"gp"
                                    }
                    </SuperTD>

                    {/* Checkbox for if item is available */}
                    <SuperTD>
                        <input type="checkbox" defaultChecked={innerThing[6]}/>
                    </SuperTD>
                    {/* Checkbox for if item is limited */}
                    <SuperTD>
                        <input type="checkbox" defaultChecked={innerThing[7]}/>
                    </SuperTD>

                </TableRow>
                </HtmlTooltip>
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