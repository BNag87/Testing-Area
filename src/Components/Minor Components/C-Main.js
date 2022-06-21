//=====================MAIN IMPORTS
import React from 'react';
import {Sidebar} from './C-Sidebar';
//=====================STYLING IMPORTS
import {
    Wrapper,
  } from "../../styles"

//=====================COMPONENT
export const Main = () => {
    return(
        <>
        <Wrapper>
            <h2>Welcome to the DMs Swiss Army Knife.</h2>
            <p>Here, there are several features designed to help DMs whilst running a game of DnD.</p>
            <h3>Features</h3>
            <h4>NPC Generator</h4>
                <ul><li>Create a random NPC on the fly. Name, Race, Alignment, Beliefs and so on at the click of a button.</li></ul>
            <h4>NPC Generator</h4>
                <ul><li>A detailed set of lists of merchant inventories, for reference when shopping.</li></ul>
            
        </Wrapper>
        </>
    )
}