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
    TextArea, 
    
    } from "../styles";

import { 
            FN_get_npc_name, //function that grabs a random npc first name
            FN_randLastName, //function that generates a random npc last name
            FN_get_random_gender, //function that assigns a random gender
            FN_get_random_race, //function that assigns a random race
            FN_randomRanged, //function that generates a random number between arguments (min, max)
            ar_races, //array of races for reference
        } from '../Reference Files/NPCNames';

import { FN_getTalent } from '../Reference Files/NPCTalents';
import { FN_getDemeanor } from '../Reference Files/NCDemeanors';
import { FN_get_NPC_alignment, FN_get_npc_alignment_traits } from '../Reference Files/NPCAlignmentsIdeals';
import { FN_get_npc_bond } from '../Reference Files/NPCBonds';
import { FN_get_npc_flaw } from '../Reference Files/NPCFlaws';

//=====-----=====-----=====-----=====----→GLOBAL VARIABLES HERE←-----=====-----=====-----=====-----=====
let GL_name, GL_gender, GL_race, GL_talent, GL_demeanor, GL_alignment, GL_bond, GL_flaw = "?";
        //global vars that hold generated info. should all eventually be strings.

//=====-----=====-----=====-----=====----→APP RENDERING HERE←-----=====-----=====-----=====-----=====
export const NpcGenerator = () => {

//function to toggle all buttons being disabled
function toggleCripple(input)
{
    console.log("Togglecripple fired with input of " +input);
    //get reference to all display box buttons
    let nameBTN = document.getElementById("btn_nameNPC");
    let genderBTN = document.getElementById("btn_genderNPC");
    let raceBTN = document.getElementById("btn_raceNPC");
    let talentBTN = document.getElementById("btn_talentNPC");
    let demeanorBTN = document.getElementById("btn_demeanorNPC");
    let alignmentBTN = document.getElementById("btn_alignmentNPC");
    let bondBTN = document.getElementById("btn_bondNPC");
    let flawBTN = document.getElementById("btn_flawNPC");
    
    console.log("\tTogglecripple buttons assigned");

    //then put them all in a single array
    let ar_btns = [nameBTN, genderBTN, raceBTN, talentBTN, demeanorBTN, alignmentBTN, bondBTN, flawBTN];
    console.log("\tTogglecripple buttons assigned to an array");

    //for loop to set disabled or enabled for each array element
    console.log("\tTogglecripple arrived at for loop");
    for(let i=0; i<ar_btns.length;)
    {
        console.log("\tTogglecripple loop number: "+i);
        if(input === true)
        {
            ar_btns[i].disabled = true;
            console.log("ar_btns["+i+"] was disabled");
            i++;
        }
        else
        {
            ar_btns[i].disabled = false;
            console.log("ar_btns["+i+"] was enabled");
            i++;
        }
    }
}


//onClick handlers:
function nameNPC(){

    //vars to track the gender box and a gender index
    var genderRef = document.getElementById("dis_npc_gender");
    var genderIndex = genderRef.value === "Male" ? 0 : 1;
    //if genderindex is 1, then it's female
    if (genderIndex === 1)
    {
        genderRef.value = "Female";
        GL_gender = "Female";
    }
    else
    {
        genderRef.value = "Male";
        GL_gender = "Male";
    }
    var raceRef = document.getElementById("dis_npc_race");
    var raceIndex = null; 
    
    var boxRef = document.getElementById("dis_npc_name");

    //first, check if gender already exists. if not, generate one
    if(genderIndex === null)
    {
        genderRef.value = FN_get_random_gender();
        genderIndex = genderRef.value === "Male" ? 0 : 1;
        GL_gender = genderRef.value === "Male" ? "Male" : "Female";
    }
    else
    {
        console.log("Gender IS NOT NULL.")
        genderIndex = genderRef.value === "Male" ? 0 : 1;
        GL_gender = genderRef.value === "Male" ? "Male" : "Female";
    }
    
//now, check for a race...
    if(raceIndex === null)
    {
        for(let check = false, i=0; check === false;)
        {
            if(raceRef.value !== String(ar_races[i]))
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
            if(i > (ar_races.length-1))
            {
                console.log("No race was selected at gen. Loop value was: "+i);
                //create a random race
                var random_race_index = FN_randomRanged(0, (ar_races.length-1)); //create a random array index
                
                raceRef.value = ar_races[random_race_index]; //assign new race to display box
                GL_race = String(ar_races[random_race_index]); //assign new race to globabl var
                raceIndex = random_race_index;
                
                check = true;
                
                //now, generate a whole new npc based on generated information
                console.log("Before updating boxRef: \n\tgenderIndex ="+genderIndex+"\n\traceIndex ="+raceIndex+".")
                let newName = FN_get_npc_name(genderIndex, raceIndex)
                boxRef.value = String(newName); //assign result to display box
                GL_name = String(newName); //assign result to global variable 
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
    GL_name = String(full_name);
    
}

function genderNPC(){
    var genderBoxRef = document.getElementById("dis_npc_gender");
    genderBoxRef.value = FN_get_random_gender();
    GL_gender = String(genderBoxRef.value);
}

function raceNPC(){
    var raceBoxRef = document.getElementById("dis_npc_race");
    raceBoxRef.value = FN_get_random_race();
    GL_race = String(raceBoxRef.value);
}

function talentNPC(){
    var talentBoxRef = document.getElementById("dis_npc_talent");
    talentBoxRef.value = FN_getTalent()
    GL_talent = String(talentBoxRef.value);
}

function demeanorNPC(){
    var demeanorBoxRef = document.getElementById("dis_npc_demeanor")
    demeanorBoxRef.value = FN_getDemeanor()
    GL_demeanor = String(demeanorBoxRef.value);
}

function alignmentNPC(){
    let npcAlignment = FN_get_NPC_alignment();
    let npcAlignmentTraits = FN_get_npc_alignment_traits(npcAlignment);
    let alignmentBoxRef = document.getElementById("dis_npc_alignment");
    alignmentBoxRef.value = ("["+ String(npcAlignment) +"] " + String(npcAlignmentTraits));
    GL_alignment = String(npcAlignmentTraits);
}

function bondsNPC() {
    var bondBoxRef = document.getElementById("dis_npc_bonds");
    bondBoxRef.value = FN_get_npc_bond()
    GL_bond = String(bondBoxRef.value);
}

function flawsNPC() {
    var flawsBoxRef = document.getElementById("dis_npc_flaws");
    flawsBoxRef.value = FN_get_npc_flaw()
    GL_flaw = String(flawsBoxRef.value);
}

function FN_create_npc_blurb()
{
    let blurbRef = document.getElementById("npcBlurb"); //reference to a textarea
    blurbRef.value = 
    (
        GL_name + " is a " 
        + GL_gender + " "  + GL_race + 
        ".\n\nThey are known for " + GL_talent.toLowerCase() +
        ".\nNormally, when talking to others, they are " + GL_demeanor.toLowerCase() +
        ".\nTheir guiding principles are " + GL_alignment.toLowerCase() +
        ".\nOn a personal level, they are " + GL_bond.toLowerCase() +
        ".\nTo their discredit, they " +GL_flaw.toLowerCase()
    );
}

function genAllBlurbs(){

    // Fire EVERY function here to fill out all fields.
    toggleCripple(false);
    nameNPC();
    genderNPC();
    raceNPC();
    talentNPC();
    demeanorNPC();
    alignmentNPC();
    bondsNPC();
    flawsNPC();
    FN_create_npc_blurb();
}

return(
    <>
    <Wrapper>
        <h2>NPC Generator</h2>
        <Table inputWidth="auto">
            <TableHead>
            <TableRow>
                <SuperTH colSpan={4}>
                <h2>Randomise All<Button onClick={ genAllBlurbs }>???</Button></h2>
                    
                    </SuperTH>
            </TableRow>
            <TableRow>
                {/* START HERE TODAY! NEED TO FIND OUT HOW TO CHANGE ENABLED to DISABLED AND HAVE CSS REFLECT IT */}
                <SuperTH>Name</SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_name" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button id = "btn_nameNPC" enabled = {false} NoHoverButton onClick = { nameNPC } inputWidth="40px">?</Button>
                </SuperTD>

                <SuperTH>Gender</SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_gender" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                        <Button id = "btn_genderNPC" disabled = {true}NoHoverButton onClick={ genderNPC } inputWidth="40px">?</Button>
                    </SuperTD>
                
                </TableRow>

                <TableRow>
                <SuperTH>Race</SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_race" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                        <Button id = "btn_raceNPC" disabled = {true} NoHoverButton onClick={ raceNPC } inputWidth="40px">?</Button>
                    </SuperTD>

                <SuperTH>Talent</SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_talent" inputWidth="250px" inputHeight="35px" inputFontSize="900" inputFontStyle="bolder" disabled={true}></TextInput>
                        <Button id = "btn_talentNPC" disabled = {true}  NoHoverButton onClick = { talentNPC } inputWidth="40px">?</Button>
                    </SuperTD>
                </TableRow>
            </TableHead>

{/* SECOND TABLE COLUMN */}
            
            <TableHead>
            <TableRow>
            <SuperTH>Demeanor</SuperTH>
                
                <SuperTD>
                    <TextInput id = "dis_npc_demeanor" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button id = "btn_demeanorNPC" disabled = {true} NoHoverButton onClick= { demeanorNPC } inputWidth="40px">?</Button>
                </SuperTD>
                
                <SuperTH>Alignment</SuperTH>
                <SuperTD>
                    
                    <TextInput id = "dis_npc_alignment" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button id = "btn_alignmentNPC" disabled = {true} NoHoverButton onClick={ alignmentNPC } inputWidth="40px">?</Button>
                </SuperTD>
                </TableRow>
                
                <TableRow>
                <SuperTH>Bond</SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_bonds" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button id = "btn_bondNPC" disabled = {true} NoHoverButton onClick={ bondsNPC } inputWidth="40px">?</Button>
                </SuperTD>
                
                <SuperTH>Flaw</SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_flaws" inputWidth="250px" inputHeight="35px" disabled={true}></TextInput>
                    <Button id = "btn_flawNPC" disabled = {true} NoHoverButton onClick={ flawsNPC }inputWidth="40px">?</Button>
                </SuperTD>
                </TableRow>
            </TableHead>
            
        </Table>

        <h2>NPC Blurb</h2>
 {/* Generate all blurb here for easier reading */}
        <TextArea disabled= {true} id="npcBlurb"/>
    </Wrapper>
</>
)
}