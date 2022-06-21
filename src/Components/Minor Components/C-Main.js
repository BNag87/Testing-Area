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
            <Sidebar/>
            <h2>Welcome to the coding ground.</h2>
            <p>Here, experimental code will be run</p>
            <h3>This component, Main, will display active components</h3>
        </Wrapper>
        </>
    )
}