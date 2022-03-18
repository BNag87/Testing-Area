import React from 'react';

import { 
    Wrapper,
    Table,
    TableHead,
    TableRow,
    SuperTH,
    SuperTD,
    Button,
    TextInput, 
    
    } from "../styles";

import { 
            FN_get_npc_name, //function that grabs a random npc first name
            FN_randLastName, //function that generates a random npc last name
            FN_get_random_gender, //function that assigns a random gender
            FN_get_random_race, //function that assigns a random race
            FN_randomRanged, //function that generates a random number between arguments (min, max)
            ar_races, //array of races for reference
        } from '../Reference Files/NPCNames';

import {
        FN_getTalent
        } from '../Reference Files/NPCTalents';

//=====-----=====-----=====-----=====----→APP RENDERING HERE←-----=====-----=====-----=====-----=====
export const NpcGenerator = () => {

//onClick handlers:
function nameNPC(){
    console.log("STAGE 1: Entered the nameNPC()...");

    var genderRef = document.getElementById("dis_npc_gender");
    var genderIndex = genderRef.value === "Male" ? 0 : 1;
    if (genderIndex === 1)
    {
        genderRef.value = "Female";
    }
    var raceRef = document.getElementById("dis_npc_race");
    var raceIndex = null; 
    
    
    var boxRef = document.getElementById("dis_npc_name");

    //first, check if gender already exist. if not, generate one
    if(genderIndex === null)
    {
        console.log("genderIndex IS null. Generating a new one")
        genderRef.value = FN_get_random_gender();
        genderIndex = genderRef.value === "Male" ? 0 : 1;
    }
    else
    {
        console.log("Gender IS NOT NULL.")
        genderIndex = genderRef.value === "Male" ? 0 : 1;
    }
    
//now, check for a race...
    if(raceIndex === null)
    {
        for(let check = false, i=0; check === false;)
        {
            if(raceRef.value !== ar_races[i])
            {
                //increase the counter to check the next race array element
                i++;
            }
            else
            {
                //escape here, because race is one of the ones in the original array
                //console.log("\tSuccess! Race ("+i+") was "+ ar_races[i]+". Setting loop check to true")
                raceIndex = i;
                check = true;
            }

            //should reach here if raceRef.value doesn't match any array element
            if(i >= (ar_races.length-1))
            {
                //create a random race
                var random_race_index = FN_randomRanged(0, (ar_races.length-1));
                raceRef.value = ar_races[random_race_index];
                
                raceIndex = random_race_index;
                check = true;
                //now, generate a whole new npc based on generated information
                boxRef.value = FN_get_npc_name(genderIndex, raceIndex);
                
            }
        }
    }
    else
    {
        console.log("RACE INDEX WAS NOT NULL");
    }
    
    var newName = FN_get_npc_name(genderIndex, raceIndex);
    var newLastName = FN_randLastName();
    var full_name = newName + " " + newLastName;
    boxRef.value = full_name;

}

function genderNPC(){
    var genderBoxRef = document.getElementById("dis_npc_gender");
    genderBoxRef.value = FN_get_random_gender();
}

function raceNPC(){
    var raceBoxRef = document.getElementById("dis_npc_race");
    raceBoxRef.value = FN_get_random_race();
}

function talentNPC(){
    var talentBoxRef = document.getElementById("dis_npc_talent");
    talentBoxRef.value = FN_getTalent()
}

return(
    <>
    <Wrapper>
        <h2>NPC Generator</h2>
        <Table inputWidth="auto">
            <TableHead>
            <TableRow>
                <SuperTH>Name</SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_name" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button NoHoverButton onClick = { nameNPC } inputWidth="40px">?</Button>
                </SuperTD>

                <SuperTH>Gender</SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_gender" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                        <Button NoHoverButton onClick={ genderNPC } inputWidth="40px">?</Button>
                    </SuperTD>
                
                </TableRow>

                <TableRow>
                <SuperTH>Race</SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_race" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                        <Button NoHoverButton onClick={ raceNPC } inputWidth="40px">?</Button>
                    </SuperTD>

                <SuperTH>Talent</SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_talent" inputWidth="250px" inputHeight="35px" inputFontSize="bolder" disabled={true}></TextInput>
                        <Button NoHoverButton onClick = { talentNPC } inputWidth="40px">?</Button>
                    </SuperTD>
                </TableRow>
            </TableHead>
{/* SECOND TABLE COLUMN */}
            <TableHead>
            <TableRow>
            <SuperTH>Demeanor</SuperTH>
                
                <SuperTD>
                    <TextInput id = "dis_npc_x" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button NoHoverButton inputWidth="40px">?</Button>
                </SuperTD>
                
                <SuperTH>SoMeThInG</SuperTH>
                <SuperTD>
                    
                    <TextInput id = "dis_npc_y" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button NoHoverButton inputWidth="40px">?</Button>
                </SuperTD>
                </TableRow>
                
                <TableRow>
                <SuperTH>sOmEtHiNg</SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_z" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button NoHoverButton inputWidth="40px">?</Button>
                </SuperTD>
                
                <SuperTH>Summit</SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_1" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button NoHoverButton inputWidth="40px">?</Button>
                </SuperTD>
                </TableRow>
            </TableHead>
            
        </Table>
    </Wrapper>
</>
)
}