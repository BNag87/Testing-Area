//=====================MAIN IMPORTS
import react from "react";
//=====================STYLING IMPORTS
import {
    MainBody,
    Wrapper,
  } from "../styles"

//=====================COMPONENT
export const Main = () => {
    return(
        <MainBody>
            <Wrapper>
                <h2>Welcome to the coding ground.</h2>
                <p>Here, experimental code will be run</p>
                <h3>This component, Main, will display active components</h3>
            </Wrapper>

        </MainBody>
    )
}