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
        <DiceComp DiceFaces={4}/>
        <DiceComp DiceFaces={6}/>
    </Wrapper>
)
}
