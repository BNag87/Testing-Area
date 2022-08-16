//This component is meant to be an individual dice roller
//PArts include a tezt box, a label and a roll button
//Props will be passed in to change the values of each component

import React from 'react';
import { useState } from 'react';
import { 
    Wrapper,
    Button,
    TextInput,

    } from "../../styles";

export const DiceComp = (props) => {
//==========Dicecomp Variables=========
let var_faces = props.DiceFaces;

// usestate to track and change count of dice and bonus
const [var_count, set_var_count] = useState(1);
const [var_bonus, set_var_bonus] = useState(0);

//==========Dicecomp functions=========

    //Shorthand version of console.log
    //use the following for styled logs:
    //    "%c LOG TEXT", "font-weight:bold; font-color=blue; background: black; padding:5px"
    const bark = (input) => {
        console.log("%c"+ input, "font-weight:bold; font-color=blue; background: black; padding:5px");
    }

    //Random number between two input numbers
    const randNumber = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //ONCHANGE FUNCTION: Change values of dice count or dice bonus
    const UpdateVars = () =>
    {
        bark("UpdateVars fired.");
        let countRef = parseInt(document.getElementById("id_Count").value);
        let bonusRef = parseInt(document.getElementById("id_Bonus").value);

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

    //ONCLICK FUNCTION: roll a dice, based on dount, face and bonus of that dice
    const RollThisDice = (count, face, bonus) => {

    //Internal scope Variables
        set_var_count(parseInt(count));
        bark("On a d"+props.DiceFaces+" roll, var_count was set to: " +var_count);
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
                let result = ((randNumber(var_count, var_faces) + var_bonus))
                results.push(result);
                bark("Result from "+var_count+"d"+var_faces+"+"+var_bonus+"= "+result)
            }
        }

        catch(error)
        {
            bark("ERROR:\nPants browned in RollThisDice function.")
            bark(error)
        }
}   

return(
<Wrapper inputFlexDirection="row">
    <TextInput id="id_Count" defaultValue={var_count} onChange={() => UpdateVars()}/> {/* Number of dice to roll */}
    d{var_faces}+
    <TextInput id="id_Bonus" defaultValue={var_bonus} onChange={() => UpdateVars()}/>    {/* Bonus to this dice roll */}
    <Button onClick={() => RollThisDice(var_count, var_faces, var_bonus)}>{var_count}d{var_faces}+{var_bonus}</Button>
</Wrapper>
)
}
