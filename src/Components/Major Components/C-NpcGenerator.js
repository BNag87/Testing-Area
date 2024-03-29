import React from 'react';
import { useEffect, useState } from 'react';
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
    InvisiDiv, 
    H3,
    } from "../../styles";
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
//=====-----=====-----=====-----=====----→APP RENDERING HERE←-----=====-----=====-----=====-----=====
export const NpcGenerator = () => {
//=====-----=====-----=====-----=====----→USESTATES HERE←-----=====-----=====-----=====-----=====
//useState to store character records
const [st_crippled, set_st_crippled] = useState({
    btnsDisabled: true
}); 

const [st_npc_Alignment, set_st_npc_Alignment] = useState("?");

//useState to store global values used in a blurb generator. init as ?
const [st_blurbVars, set_st_blurbVars] = useState({
    GL_name: "?", 
    GL_gender: "?", 
    GL_race: "?", 
    GL_talent: "?", 
    GL_demeanor: "?",
    GL_alignment: "?", 
    GL_bond: "?", 
    GL_flaw: "?",
})
//=====-----=====-----=====-----=====----→USEEFFECT HERE←-----=====-----=====-----=====-----=====
useEffect(() => 
    {
        //re-renders for each update made to watched vars 
    }, [st_blurbVars]);
//=====-----=====-----=====-----=====----RAW DATA HERE←-----=====-----=====-----=====-----=====
let preBlurb = String(
    st_blurbVars.GL_name + 
    " is a " + 
    String(st_blurbVars.GL_gender).toLowerCase() + 
    " "  + st_blurbVars.GL_race + 
    ".\n\nThey are known for " + 
    String(st_blurbVars.GL_talent).toLowerCase() +
    ".\nNormally, when talking to others, they are " +
    String(st_blurbVars.GL_demeanor).toLowerCase() +
    ".\nTheir guiding principles are " + 
    String(st_blurbVars.GL_alignment).toLowerCase() +
    ".\nOn a personal level, they are " + 
    String(st_blurbVars.GL_bond).toLowerCase() +
    ".\nTo their discredit, they " + 
    String(st_blurbVars.GL_flaw).toLowerCase()
    );
//function to toggle all buttons being disabled
function toggleCripple(input)
{
    set_st_crippled(input);
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
    }
    else
    {
        genderRef.value = "Male";
    }
    
    st_blurbVars.GL_gender = genderRef.value;
    set_st_blurbVars({...st_blurbVars});
    var raceRef = document.getElementById("dis_npc_race");
    var raceIndex = null; 
    var boxRef = document.getElementById("dis_npc_name");
    //first, check if gender already exists. if not, generate one
    if(genderIndex === null)
    {
        genderRef.value = FN_get_random_gender();
        genderIndex = genderRef.value === "Male" ? 0 : 1;
        st_blurbVars.GL_gender = genderRef.value === "Male" ? "Male" : "Female" 
        set_st_blurbVars({...st_blurbVars});
    }
    else
    {
        //this gets fired if gender ref is not null
        genderIndex = genderRef.value === "Male" ? 0 : 1;
        st_blurbVars.GL_gender = genderRef.value === "Male" ? "Male" : "Female" 
        set_st_blurbVars({...st_blurbVars});
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
                //escape the loop here, because race is one of the ones in the original array
                raceIndex = i;
                check = true;
            }
            //should reach here if raceRef.value doesn't match any array element
            if(i > (ar_races.length-1))
            {
                //create a random race
                var random_race_index = FN_randomRanged(0, (ar_races.length-1)); //create a random array index  
                raceRef.value = ar_races[random_race_index]; //assign new race to display box
                st_blurbVars.GL_race = ar_races[random_race_index];
                set_st_blurbVars({...st_blurbVars}); //set global race var to result
                raceIndex = random_race_index;
                check = true;
                
                //now, generate a whole new npc based on generated information
                let newName = FN_get_npc_name(genderIndex, raceIndex)
                boxRef.value = String(newName); //assign result to display box
                st_blurbVars.GL_name = newName;
                set_st_blurbVars({...st_blurbVars}); //assign result to global variable 
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
    st_blurbVars.GL_name = full_name;
    set_st_blurbVars({...st_blurbVars});    
}
function genderNPC(){
    var genderBoxRef = document.getElementById("dis_npc_gender");
    genderBoxRef.value = FN_get_random_gender();
    //setState for talent global state var
    st_blurbVars.GL_gender = genderBoxRef.value;
    set_st_blurbVars({...st_blurbVars});
}
function raceNPC(){
    var raceBoxRef = document.getElementById("dis_npc_race");
    raceBoxRef.value = FN_get_random_race();
 
    //setState for race global state var
    st_blurbVars.GL_race = raceBoxRef.value;
    set_st_blurbVars({...st_blurbVars});
}
function talentNPC(){
    var talentBoxRef = document.getElementById("dis_npc_talent");
    talentBoxRef.value = FN_getTalent()
    //setState for talent global state var
    st_blurbVars.GL_talent = talentBoxRef.value;
    set_st_blurbVars({...st_blurbVars});
}
function demeanorNPC(){
    var demeanorBoxRef = document.getElementById("dis_npc_demeanor")
    demeanorBoxRef.value = FN_getDemeanor()
    //setState for demeanor global state var
    st_blurbVars.GL_demeanor = demeanorBoxRef.value;
    set_st_blurbVars({...st_blurbVars});
}
function alignmentNPC(){
    let npcAlignment = FN_get_NPC_alignment();
    set_st_npc_Alignment(String(npcAlignment));
    let npcAlignmentTraits = FN_get_npc_alignment_traits(npcAlignment);
    let alignmentBoxRef = document.getElementById("dis_npc_alignment");
    alignmentBoxRef.value = ("["+ String({st_npc_Alignment}) +"] " + String(npcAlignmentTraits));
    //setState for alignment global state var
    st_blurbVars.GL_alignment = npcAlignmentTraits;
    set_st_blurbVars({...st_blurbVars});
}
function bondsNPC() {
    var bondBoxRef = document.getElementById("dis_npc_bonds");
    bondBoxRef.value = FN_get_npc_bond()
    //setState for bond global state var
    st_blurbVars.GL_bond = bondBoxRef.value;
    set_st_blurbVars({...st_blurbVars});
}
function flawsNPC() {
    var flawsBoxRef = document.getElementById("dis_npc_flaws");
    flawsBoxRef.value = FN_get_npc_flaw()
    
    //setState for flaw global state var
    st_blurbVars.GL_flaw = flawsBoxRef.value;
    set_st_blurbVars({...st_blurbVars});
}
function FN_create_npc_blurb()
{
    let blurbRef = document.getElementById("npcBlurb"); //reference to a textarea
    blurbRef.value = 
    (
        st_blurbVars.GL_name + 
        " is a " + String(st_blurbVars.GL_gender).toLowerCase() + 
        " "  + st_blurbVars.GL_race + 
        ".\n\nThey are known for " + String(st_blurbVars.GL_talent).toLowerCase() +
        ".\nNormally, when talking to others, they are " + String(st_blurbVars.GL_demeanor).toLowerCase() +
        ".\nTheir guiding principles are " + String(st_blurbVars.GL_alignment).toLowerCase() +
        ".\nOn a personal level, they are " + String(st_blurbVars.GL_bond).toLowerCase() +
        ".\nTo their discredit, they " + String(st_blurbVars.GL_flaw).toLowerCase()
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
    FN_create_npc_blurb("AFTER GEN");
}
return(
    <>
    <InvisiDiv inputHeight="170px" Z="2"/>
    <InvisiDiv inputMargin="20px 0px 0px 0px" Z="2">
    <Wrapper inputWidth="65%" Z="1">
        <Table inputWidth="100%">
            <TableHead>

            <TableRow>
                <SuperTH colSpan={4}>
                    <h2>NPC Generator</h2>
                </SuperTH>
            </TableRow>

            <TableRow>
                <SuperTH colSpan={4}>
                    <h2>Randomise All  <Button inputRadius = "100%"  inputWidth = "50px" inputHeight = "50px" onClick={ genAllBlurbs }>?</Button></h2>
                </SuperTH>
            </TableRow>        

            <TableRow inputBackgroundColour="#b368a3">
                <SuperTH inputWidth="100px">
                <InvisiDiv>
                    <H3 ForTH>Name</H3> 
                </InvisiDiv>

                <InvisiDiv>
                    <Button 
                        id = "btn_nameNPC" 
                        disabled = {st_crippled} 
                        NoHoverButton 
                        onClick = { nameNPC } 
                        inputWidth="40px"
                        inputMargin="0px 0px 10px 0px">
                            ?
                    </Button>
                </InvisiDiv>
                </SuperTH>

                <SuperTD>
                    <TextInput 
                        id = "dis_npc_name" 
                        inputMargin="3px" 
                        inputWidth="90%" 
                        inputHeight="35px" 
                        inputDColour="Black"
                        disabled={true} 
                        value={st_blurbVars.GL_name}>
                    </TextInput>
                </SuperTD>

                <SuperTH>
                    <InvisiDiv>
                        <H3 ForTH>Gender</H3> 
                    </InvisiDiv>
                    <InvisiDiv>
                        <Button 
                            id = "btn_genderNPC" 
                            disabled = {st_crippled} 
                            NoHoverButton 
                            onClick={ genderNPC } 
                            inputWidth="40px" 
                            inputMargin="0px 0px 10px 0px">?</Button>
                    </InvisiDiv>
                </SuperTH>
                    
                    <SuperTD>
                        <TextInput 
                            id = "dis_npc_gender" 
                            inputMargin="3px" 
                            inputWidth="90%" 
                            inputHeight="35px" 
                            inputDColour="Black"
                            disabled={true} 
                            value={st_blurbVars.GL_gender}>
                        </TextInput>
                    </SuperTD>
                
            </TableRow>
            <TableRow inputBackgroundColour="#b368a3">
                <SuperTH>
                    <InvisiDiv>
                        <H3 ForTH>Race</H3>
                    </InvisiDiv>
                    
                    <InvisiDiv>
                        <Button 
                            id = "btn_raceNPC" 
                            disabled = {st_crippled} 
                            NoHoverButton 
                            onClick={ raceNPC } 
                            inputWidth="40px" 
                            inputMargin="0px 0px 10px 0px" 
                            value = {st_blurbVars.GL_race}>?
                        </Button>
                    </InvisiDiv>
                </SuperTH>
                    <SuperTD>
                        <TextInput id = "dis_npc_race" inputDColour="Black" inputMargin="3px" inputWidth="90%" inputHeight="35px" disabled={true} value = {st_blurbVars.GL_race}></TextInput>
                        
                    </SuperTD>
               
                <SuperTH >
                    <InvisiDiv>
                        <H3 ForTH>Talent</H3>
                    </InvisiDiv>
                    
                    <InvisiDiv>
                        <Button 
                            id = "btn_talentNPC"
                            disabled = {st_crippled}  
                            NoHoverButton 
                            onClick = { talentNPC } 
                            inputWidth="40px" 
                            inputMargin="0px 0px 10px 0px" 
                            value = {st_blurbVars.GL_talent}>?</Button>
                    </InvisiDiv>
                    </SuperTH>

                    <SuperTD>
                        <TextInput id = "dis_npc_talent" inputDColour="Black" inputMargin="3px" inputWidth="90%" inputHeight="35px" disabled={true} value = {st_blurbVars.GL_talent}></TextInput>     
                    </SuperTD>
            </TableRow>
            </TableHead>
{/* SECOND TABLE COLUMN */}
            
            <TableHead>
            <TableRow inputBackgroundColour="#b368a3">
                <SuperTH inputWidth="70px">
                    <InvisiDiv>
                        <H3 ForTH>Demeanor</H3>
                    </InvisiDiv>
                    <InvisiDiv> 
                        <Button 
                            id = "btn_demeanorNPC" 
                            disabled = {st_crippled} 
                            NoHoverButton 
                            onClick= { demeanorNPC } 
                            inputWidth="40px" 
                            inputMargin="0px 0px 10px 0px">?</Button>
                    </InvisiDiv>
                </SuperTH>
                
                <SuperTD>
                    <TextInput id = "dis_npc_demeanor" inputDColour="Black" inputMargin="3px" inputWidth="95%" inputHeight="35px" disabled={true} value = {st_blurbVars.GL_demeanor}></TextInput>
                    
                </SuperTD>
                
                <SuperTH >
                    <InvisiDiv>
                        <H3 ForTH>Alignment</H3>
                    </InvisiDiv>
                    <InvisiDiv>
                        <Button 
                            id = "btn_alignmentNPC"
                            disabled = {st_crippled} 
                            NoHoverButton 
                            onClick={ alignmentNPC } 
                            inputMargin="0px 0px 10px 0px"
                            inputWidth="40px">?</Button>
                    </InvisiDiv>
                </SuperTH>

                <SuperTD>
                    <TextInput id = "dis_npc_alignment" inputDColour="Black" inputFontSize="14px" inputMargin="3px" inputWidth="90%" inputHeight="35px" disabled={true} value = {"(" + st_npc_Alignment + ") " + st_blurbVars.GL_alignment}></TextInput>
                    
                </SuperTD>
                </TableRow>
                
                <TableRow inputBackgroundColour="#b368a3">
                <SuperTH>
                    <InvisiDiv>
                        <H3 ForTH>Bond</H3>
                    </InvisiDiv> 
                    
                    <InvisiDiv>
                        <Button 
                            id = "btn_bondNPC" 
                            disabled = {st_crippled} 
                            NoHoverButton 
                            onClick={ bondsNPC } 
                            inputWidth="40px" 
                            inputMargin="0px 0px 10px 0px">?
                        </Button>
                    </InvisiDiv>
                </SuperTH>
                    
                <SuperTD>
                    <TextInput id = "dis_npc_bonds" inputDColour="Black" inputMargin="3px" inputWidth="90%" inputHeight="35px" disabled={true} value = {st_blurbVars.GL_bond}></TextInput>
                    
                </SuperTD>
                
                
                <SuperTH>
                    <InvisiDiv><H3 ForTH>Flaw</H3></InvisiDiv> 
                    <Button 
                        id = "btn_flawNPC" 
                        disabled = {st_crippled} 
                        NoHoverButton 
                        onClick={ flawsNPC } 
                        inputWidth="40px" 
                        inputMargin="0px 0px 10px 0px">?
                    </Button>
                </SuperTH>
                <SuperTD>
                    <TextInput id = "dis_npc_flaws" inputDColour="Black" inputMargin="3px" inputWidth="90%" inputHeight="35px" disabled={true}  value = {st_blurbVars.GL_flaw}></TextInput>
                    
                </SuperTD>
                </TableRow>

                <TableRow >
                <SuperTH colSpan={4}>

                    <TextArea disabled= {st_crippled} id="npcBlurb" value={ preBlurb }/>
                    </SuperTH>   
                </TableRow>

            </TableHead>
    </Table>
    </Wrapper>
    </InvisiDiv>
</>
)
}