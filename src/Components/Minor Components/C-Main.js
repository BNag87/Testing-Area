//=====================MAIN IMPORTS
import React from 'react';
//=====================STYLING IMPORTS
import {
    InvisiDiv,
    Wrapper,
    
  } from "../../styles"

//=====================COMPONENT
export const Main = () => {
    return(
        <>
        <InvisiDiv inputHeight="100vh">
        <Wrapper inputWidth="60%">
            <h2>Welcome to the DMs Swiss Army Knife.</h2>
            <p>Here, there are several features designed to help DMs whilst running a game of DnD.</p>

            <p>Click the menu icon at the top left to see what's available!</p>
 
            
        </Wrapper>
        </InvisiDiv>
        
        </>
    )
}