import React, { useState } from 'react';

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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

//==========----------→COMPONENT STARTS HERE
export const MerchantGenerator = () => {

//==========----------→ ↓GENERAL FUNCTIONS HERE↓ ←---------==========
    //shorter version of 'console.log'
    const bark = (input) =>{
        console.log(input);
    }
    
//==========----------→ ↓USESTATES HERE↓ ←---------==========
    // usestate to track what index is being used for rendering shop data
    const [shopIndex, setShopIndex] = useState(0);
    // useState to track if tooltips are being displayed
    const [toolTipToggle, set_toolTipToggle] = useState(true);
    

//==========----------→ ↓JSON IMPORTS/CONVERSIONS HERE↓ ←---------==========
    //get the json data
    const jsonData = require("../Reference Files/Json Files/shops.json");

    //convert data in to an array
    const objInnerValues = Object.values(jsonData.shops)

//==========----------→ ↓ARRAYS HERE↓ ←---------==========
    //empty array to store key values of map generated table rows
    let AR_rowKeys = [];
    //empty array to store SET of rowKeys (removes duplicates. populated from a function)
    let AR_setRowKeys = [];
    //empty array to store html references of hidden table rows
    let AR_RowRefs = [];
    
//==========----------→ ↓ONCLICK FUNCTIONS HERE↓ ←---------==========
    //function to toggle visibility of categories in item lists
    const fireVisibility = (e) => {
        try{
            //get id of element that clicked (use as an array pointer/grabber)
            let parentID = e.target.parentElement.parentElement.className;
           
            try{
                //get the group of rows with the same ID
                var els = document.getElementsByClassName(parentID)
            
                //loop through the new collection...
                for(let i = 0; i < els.length; i++)
                {
                    //then set the display style to none to hide them. Collapses the rows!
                    var s  = els[i].style;
                    var r = els[i];
                    
                    s.display = (s.display === 'none' ? 'block' : 'none')
                    AR_RowRefs.push(r)
                }
            }
            catch(error)
            {
                bark("Bowels voided in loop:"+error)
            }
            }

        catch(error)
        {
            bark("Pants shat in 'fireVisibilty'!\n"+error);
        }
        //try to invert visible
        // (rowID.hidden = false) ? rowID.hidden = true : (rowID.hidden = true) ? rowID.hidden = false : console.log("Nothing wrong here!")
        
        
    }

    //function that handles onclick function of buttons that change the shop type the user is viewing. auto sorts and generates!
    const ChangeMerchant = (input) => {
        setShopIndex(input)
    }

    //onClick function used to toggle tooltips from being displayed or not
    const toggleTooltips = () => {
        if(toolTipToggle)
        {
            set_toolTipToggle(false);
        }
        else{
            set_toolTipToggle(true);
        }
    }

    //onClick function to unhide any table rows that have been hidden and stored in the AR_RowRefs array
    const showHiddenRows = () => {
        try{
            for(let i = 0; i<AR_RowRefs.length ; i++)
            {
                //set display as "table-row", keeps original formatting
                AR_RowRefs[i].style.display = "table-row";
            }
            // With rows now unhidden, empty the array as it's not needed anymore
            AR_RowRefs = [];
        }
        catch(error)
        {
            bark("BOWEL EXPLOSION in 'showHiddenRows':")
            bark(error)
        }
    }
//==========----------→ ↓SPECIAL COMPONENTS HERE↓ ←---------==========
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
                        {/* TABLE BUTTONS */}
                        {/* InvisiDiv is an invisible div wrapper to help align elements */}
                            <InvisiDiv>
                                <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px" onClick = {() => ChangeMerchant(0)}>
                                    Blacksmith
                                </Button>
                                
                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(4)}>
                                    Bookseller
                                </Button>

                                <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(11)}>
                                Clothier
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(1)}>
                                    Fletcher
                                </Button>

                            </InvisiDiv>
                            <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(5)}>
                                    General Store
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(8)}>
                                    Inns
                                </Button>

                                <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(10)}>
                                Jeweler
                                </Button>   

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(2)}>
                                    Leatherworker
                                </Button>
                            <InvisiDiv>

                            </InvisiDiv>

                            <InvisiDiv>
                            <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(7)}>
                                    Magic Shop
                                </Button>

                                <Button inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(9)}>
                                    Marketplace
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(6)}>
                                    Potions
                                </Button>

                                <Button
                                inputBackground = "#222222" inputBorder= "outset rgba(150, 40, 40, 0.4) 3px" inputColor = "#cccccc" inputFontSize = "normal" inputFontVariant = "normal" inputWidth = "130px"
                                onClick = {() => ChangeMerchant(3)}>
                                    Temple
                                </Button>
                            </InvisiDiv>

                            <hr/> 
                        {/* OPTIONS PANEL */}
                            <h3>Options</h3>
                            <InvisiDiv>
                                <H3>Tooltips <Button ShowButton id="BTN_TooltipToggle" onClick={ () => toggleTooltips() }/> [{toolTipToggle === false ? "Off" : "On"}]</H3>
                                <H3>Show Hidden Rows <Button ShowButton id="BTN_UnhideRows" onClick= { () => showHiddenRows() }/></H3>
                            </InvisiDiv>

                            <hr/> 
                        {/* Displays the shop type currently selected */}
                            <InvisiDiv>
                            <h3>Shop Type</h3>
                                <H3>{objInnerValues[shopIndex][0]}</H3>
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
                            (outerIndex === 0) ? console.log("Skipping empty rows") : (outerIndex %2 === 0) ? 
                            Object.values(thing).map((innerThing, innerIndex) => (
                            <>
                            
                            {/* Tooltip popup for item blurb */}
                            <HtmlTooltip title={
                                (toolTipToggle === false) ? "" :  <>
                                <Typography color= "inherit">
                                    <b>{innerThing[2]} </b> 
                                </Typography>
                                <hr/>
                                <p><b>{innerThing[9]}</b></p>
                                </>
                            } arrow placement="top">
                            
                            {/* Table rows for each record */}
                            <TableRow
                            inputBackgroundColour="#331B18" 
                            inputFontColour = "#aaaaaa" 
                            key = {thing[0][0]}
                            className = {"rowID-"+thing[0][0]} 
                            >
                                
                            {void AR_rowKeys.push("rowID-"+thing[0][0])}

                            {/* Indidivual td elements to display each item in a row*/}
                            <SuperTD NoHoverTD>{innerThing[2]}</SuperTD>
                            
                            <SuperTD NoHoverSmallTxtTD>
                            {innerThing[1]} <Button HideButton
                                                
                                inputWidth = "20px" 
                                inputHeight="20px" 
                                inputMargin="3px" 
                                inputPadding="1px" 
                                onClick={(event) => fireVisibility(event)}>
                                </Button>
                                
                            </SuperTD>

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
                                (toolTipToggle === false) ? "" :  <>
                                <Typography color= "inherit">
                                    <b>{innerThing[2]} </b> 
                                </Typography>
                                <hr/>
                                <p><b>{innerThing[9]}</b></p>
                                </>
                            } arrow placement="top">

                {/* Table rows for each record */}
                <TableRow
                    inputBackgroundColour="#111133" 
                    inputFontColour = "#bbbbbb" 
                    key = {thing[0][0]}
                    className = {"rowID-"+thing[0][0]} 
                >
                <SuperTD NoHoverTD>{innerThing[2]}</SuperTD>
                <SuperTD NoHoverSmallTxtTD>
                    {innerThing[1]} <Button HideButton                                
                        inputWidth = "20px" 
                        inputHeight="20px" 
                        inputMargin="3px" 
                        inputPadding="1px" 
                        onClick={(event) => fireVisibility(event)}>
                    </Button>               
                </SuperTD>
                    
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