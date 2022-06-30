import React from "react";

import { TopBar, InvisiDiv, H3} from "../../styles";
import { Sidebar } from "./C-Sidebar";

export const PageTopbar = () => {
    return(
        <>
        <TopBar>
            <InvisiDiv inputAlignItems="left" inputTextAlign="left" inputWidth="5%" Z="6">
            <Sidebar/>            
            </InvisiDiv>

            <InvisiDiv inputAlignItems="center" inputTextAlign="center" inputWidth="87%">
                <H3 
                inputBorder="none" 
                inputFontSize="35px" 
                inputFontShadow="2px 1px rgba(30,30,30,0.5)" 
                inputBackgroundColour="none" 
                inputFontWeight="1000" 
                inputColour="rgba(30,30,30,0.7)"
                >
                    DMs S.A.K
                </H3>
            </InvisiDiv>
        </TopBar>
        </>
    )
}