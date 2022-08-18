import React from 'react';
import { 
    Wrapper,
    } from "../../styles";

    import { DiceComp } from '../Minor Components/C-DiceComp';

export const DiceRoller = () => {

//Dice Roller Functions

//Dice Roller Return Block
return(

    // Top level wrapper to contain element. May need to specify size, border and border radius
    <Wrapper inputFlexDirection="row">
        <DiceComp id="d4" DiceFaces={4}/>
        <DiceComp id="d6" DiceFaces={6}/>
        <DiceComp id="d8" DiceFaces={8}/>
    </Wrapper>
)
}
