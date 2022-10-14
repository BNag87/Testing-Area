/*
This file is a component that connects to a mongoDB collection, retrieves data and displays it.
Its a treasure generator that scales, by cash value, all of the items generated
*/

import React, { useState } from 'react';
import { TreasureGenerator } from '../../dbc';

//  Styling Imports
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

//  shorthand version of console.log
    const bark = (input) => {
        console.log(input)
}

//  COMPONENT STARTS HERE:
export const TreasureGen = () => {

//  FUNCTIONS/VARS ETC...
bark("Some shit in the void")

//  RETURN BLOCK
return(
    <>
        <TreasureGenerator/>
       <InvisiDiv inputHeight="100vh" inputMargin="0% 0% 0% 0%" Z="1">
            <Wrapper inputWidth="80%" Z="2">
                <h2>Treasure Generator</h2>
                
                <p>Click the button to generate a pile of treasure.</p>
                
                <Button>Click Me</Button>

                <p>Some shit here for the generated stuff</p>
        
            </Wrapper>
            </InvisiDiv>
    </>
    )
}