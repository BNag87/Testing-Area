//=====================MAIN IMPORTS
import React from 'react';
import {Sidebar} from './C-Sidebar';
//=====================STYLING IMPORTS
import {
    InvisiDiv,
    Wrapper,
  } from "../../styles"

//=====================COMPONENT
export const Main = () => {
    return(
        <>
        <InvisiDiv>
        <Wrapper inputWidth="60%" inputFlexDiretion="row">
            <h2>Welcome to the DMs Swiss Army Knife.</h2>
            <p>Here, there are several features designed to help DMs whilst running a game of DnD.</p>
 
            <p>Click the menu icon at the top left to see what's available!</p>
 
            
        </Wrapper>
        </InvisiDiv>
        </>
    )
}