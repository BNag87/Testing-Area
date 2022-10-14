import React from "react";

import { TopBar, InvisiDiv, H3} from "../../styles";
import { DiceComp } from "./C-DiceComp";
import { Sidebar } from "./C-Sidebar";

export const PageTopbar = () => {
    return(
        <>
        <TopBar inputHeight="20%">
            <InvisiDiv inputAlignItems="left" inputTextAlign="left" inputWidth="5%" Z="6">
            <Sidebar/>            
            </InvisiDiv>

            <InvisiDiv inputAlignItems="center" inputTextAlign="center" inputMargin="0px 110px 0px 0px" inputWidth="100%" inputFlexDirection="column">
                <H3 
                inputBorder="none" 
                inputFontSize="35px" 
                inputFontShadow="2px 1px rgba(30,30,30,0.5)" 
                inputBackgroundColour="none" 
                inputFontWeight="1000" 
                inputColour="rgba(30,30,30,0.7)"
                inputWidth="100%"
                >
                    DMs S.A.K
                </H3>
                <DiceComp/>
            </InvisiDiv>
        </TopBar>
        </>
    )
}