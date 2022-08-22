//This component is meant to be an individual dice roller
//Parts include a text box, a label and a roll button
//Props will be passed in to change the values of each component

import React from 'react';
import { useState, useEffect } from 'react';
import { 
    Wrapper,
    Button,
    TextInput,
    P,
    } from "../../styles";

export const DiceComp = () => {
//==========Dicecomp functions=========

    //Shorthand version of console.log
    //use the following for styled logs:
    //    "%c LOG TEXT", "font-weight:bold; font-color=blue; background: black; padding:5px"
    const bark = (input) => {
        console.log("%c"+ input, "font-weight:bold; font-color=blue; background: black; padding:5px");
    }

    // usestate to track and change count of dice and bonus
    const [var_count, set_var_count] = useState(1);
    const [var_faces, set_var_faces] = useState(4);
    const [var_bonus, set_var_bonus] = useState(0);

    //useEffect to trigger re-renders
    useEffect(() => {
    }, [var_count, var_bonus, var_faces])

    //Random number between two input numbers
    const randNumber = (min, max) => { 
        return Math.round(Math.random() * (max - min + 1) + min)
    }

    //ONCHANGE FUNCTION: Change values of dice count or dice bonus
    const UpdateVars = () =>
    {
        let countRef = parseInt(document.getElementById("id_Count").value);
        let faceRef = parseInt(document.getElementById("id_Faces").value);
        let bonusRef = parseInt(document.getElementById("id_Bonus").value);

        if(isNaN(countRef))
        {
            countRef = 1;
        }
        if(isNaN(faceRef))
        {
            faceRef = 4;
        }
        if(isNaN(bonusRef))
        {
            bonusRef = 1;
        }
        
        set_var_count(countRef);
        set_var_faces(faceRef);
        set_var_bonus(bonusRef);

    }

    //ONCLICK FUNCTION: roll a dice, based on count, face and bonus of that dice
    const RollThisDice = (count, faces, bonus) => {

    //Internal scope Variables
        set_var_count(parseInt(count));
        set_var_faces(parseInt(faces));
        set_var_bonus(parseInt(bonus));
        let resBox = document.getElementById("id_Results");
        let totBox = document.getElementById("id_Total");
        resBox.value = "";

        if(isNaN(var_count))
        {
            set_var_count(1);
        }
        if(isNaN(var_faces))
        {
            set_var_faces(4);
        }
        if(isNaN(var_bonus))
        {
            set_var_bonus(1);
        }
        try{
            let totalResults = 0;
            let AR_Results = [];
            //Roll the dice, generate the result as many times as needed
        
        //stuff an array with each dice roll
        for(let i = 0; i < var_count; i++)
            {   
                let result = Math.floor((randNumber(1, var_faces)))
            
                if(result > var_faces)
                {
                    result = (var_faces);
                } 
                    AR_Results.push(result);
                    totalResults += parseInt(result);
            } 

        //Spit out total...
            if(var_bonus === 0)
            {
                totBox.value = totalResults;
            }
            else
            {
                totBox.value = (totalResults + var_bonus) +(var_bonus < 0 ? "(" : "(+")+ var_bonus+")";
            }
       
        //then spit it out to the results box, formatted
        for(let ind = 0; ind < AR_Results.length; ind++)
        {
            if(ind+1 === AR_Results.length)
            {
                resBox.value += AR_Results[ind];
                resBox.value += ".";
            }
            else{
                resBox.value += AR_Results[ind];
                resBox.value += ", ";
            }
        }


        }
        catch(error)
        {
            bark("ERROR:\nPants browned in RollThisDice function.")
            bark(error)
        }
}   


return(
<Wrapper inputBoxShadow="none" inputWidth="300px" inputFlexDirection="row" inputBorder="white 3px inset" inputPadding="5px" inputMargin="-5px 0px 0px 0px">
<P inputFontSize="20px" inputWidth="100%">
    <TextInput id="id_Count" inputFontFamily="courier" inputWidth="30px" inputBorder="none" inputMargin="5px" inputPadding="5px" defaultValue={var_count} onChange={() => UpdateVars()}/>
    d
    <TextInput id="id_Faces" inputFontFamily="courier" inputWidth="30px" inputBorder="none" inputMargin="5px" inputPadding="5px" defaultValue={var_faces} onChange={() => UpdateVars()}/>
    +
    <TextInput inputFontFamily="courier" id="id_Bonus" inputWidth="30px" inputBorder="none" inputMargin="5px" inputPadding="5px" defaultValue={var_bonus} onChange={() => UpdateVars()}/>
    <Button inputFontWeight="normal" inputWidth="auto" onClick={() => RollThisDice(var_count, var_faces, var_bonus)}>{var_count}d{var_faces}{(var_bonus < 0 ? "" : "+")}{var_bonus}</Button>
    
</P>
<TextInput id="id_Results" inputDBackgroundColour="rgb(40,40,80)" inputFontSize="12px" inputWidth="auto" inputDColour="rgb(240,240,250)" inputFontFamily="courier" inputMargin="2px" disabled={true} placeholder="Results"/>
    = <TextInput id="id_Total" inputDBackgroundColour="rgb(40,40,80)" inputFontSize="14px" inputWidth="55px" inputDColour="rgb(240,240,250)" inputFontFamily="courier" inputMargin="2px" disabled={true} placeholder="Total"/>
</Wrapper>
)
}
