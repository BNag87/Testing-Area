//This component is meant to be an individual dice roller
//Parts include a text box, a label and a roll button
//Props will be passed in to change the values of each component

import React from 'react';
import { useState, useEffect } from 'react';
import { 
    Wrapper,
    Button,
    TextInput,

    } from "../../styles";

export const DiceComp = (props) => {
//==========Dicecomp Variables=========
let var_faces = props.DiceFaces;

//==========Dicecomp functions=========

    //Shorthand version of console.log
    //use the following for styled logs:
    //    "%c LOG TEXT", "font-weight:bold; font-color=blue; background: black; padding:5px"
    const bark = (input) => {
        console.log("%c"+ input, "font-weight:bold; font-color=blue; background: black; padding:5px");
    }

    //useEffect to trigger re-renders
    useEffect(() => {
    }, [var_count, var_bonus])

    //Random number between two input numbers
    const randNumber = (min, max) => { 
        return Math.round(Math.random() * (max - min + 1) + min)
    }

    //ONCHANGE FUNCTION: Change values of dice count or dice bonus
    const UpdateVars = () =>
    {
        let countRef = parseInt(document.getElementById("id_Count").value);
        let bonusRef = parseInt(document.getElementById("id_Bonus").value);

            bark(In 'UpdateVars' )

        if(isNaN(countRef))
        {
            countRef = 1;
        }
        if(isNaN(bonusRef))
        {
            bonusRef = 1;
        }

        
        set_var_count(countRef);
        set_var_bonus(bonusRef);

    }

    //ONCLICK FUNCTION: roll a dice, based on count, face and bonus of that dice
    const RollThisDice = (count, face, bonus) => {

    //Internal scope Variables
        set_var_count(parseInt(count));
        var_faces = parseInt(face);
        set_var_bonus(parseInt(bonus));

        if(isNaN(var_count))
        {
            set_var_count(1);
        }

        if(isNaN(var_bonus))
        {
            set_var_bonus(1);
        }
   
        let results = [];

        try{
    
            //Roll the dice, generate the result as many times as needed
        for(let i = 0; i < var_count; i++)
            {
                
                let result = Math.floor((randNumber(1, props.DiceFaces)))
                bark("Loop "+(i+1)+ "/"+(var_count)+". 1d"+props.DiceFaces+"= "+result);
                results.push(result);
                
            }
            bark("Rolls made: "+results+". (Each roll adds "+var_bonus+" to it)");
            
        }

        catch(error)
        {
            bark("ERROR:\nPants browned in RollThisDice function.")
            bark(error)
        }
}   

// usestate to track and change count of dice and bonus
const [var_count, set_var_count] = useState(1);
const [var_bonus, set_var_bonus] = useState(0);
bark("States initialised:\nvar_count: "+var_count+"\nvar_bonus: "+var_bonus);

return(
<Wrapper inputFlexDirection="row">
    <TextInput id="id_Count" inputWidth="25px" inputBorder="none" inputMargin="5px" inputPadding="5px" defaultValue={var_count} onChange={() => UpdateVars()}/> {/* Number of dice to roll */}
    d{var_faces}+
    <TextInput id="id_Bonus" inputWidth="25px" inputBorder="none" inputMargin="5px" inputPadding="5px" defaultValue={var_bonus} onChange={() => UpdateVars()}/>    {/* Bonus to this dice roll */}
    <Button onClick={() => RollThisDice(var_count, var_faces, var_bonus)}>{var_count}d{var_faces}+{var_bonus}</Button>
</Wrapper>
)
}
