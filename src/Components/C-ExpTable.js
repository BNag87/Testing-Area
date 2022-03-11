import React, {useState, useEffect} from 'react';
import { char_Obj } from "../Reference Files/ObjectDefs";
import { 
    Wrapper,
    Table,
    TableHead,
    TableRow,
    Button,
    RowSpacer,
    TextInput, 
    } from "../styles";

export const ExpTable = () => {

    let Char1 = new char_Obj(1,"Saloth", "Saar", 45, "Male", "Dragonborn", "Sorcerer", 10);
    let Char2 = new char_Obj(2,"Kaedwen", "Isaani", 36, "Male", "Dragonborn", "Sorcerer", 8); 
    let Char3 = new char_Obj(3,"Euridice", "Swiftblade", 23, "Female", "Human", "Bard", 5);
    
//array to store characters made from objectdefs file
    let ar_charBin = [Char1, Char2, Char3];
    
//useState to store character records
    const [st_charData, set_st_charData] = useState({
        id: "",
        fName: "",
        sName: "",
        age: "",
        gender: "",
        race: "",
        classType: "",
        level: "",   
    });  
    
//useState to store and modify display elements for records
    const [st_displayBoxes, set_st_displayBoxes] = useState([
        document.getElementById("txt_idField"),
        document.getElementById("txt_fNameField"),
        document.getElementById("txt_sNameField"),        
        document.getElementById("txt_ageField"),
        document.getElementById("txt_genderField"),
        document.getElementById("txt_raceField"),
        document.getElementById("txt_classField"),
        document.getElementById("txt_levelField")
     ]);

//useEffect to fire on each re-render.
//need this to update the text fields as the character usestate is updated
    useEffect(() => 
    {
        console.log("useEffect was fired with st_charData as a dependancy");
        
        // let aIn = st_charData.id;
        // st_displayBoxes[0].innerHTML = aIn;
        
        // let bIn = st_charData.fName;
        // set_st_displayBoxes[1] = bIn;
        
        // let cIn = st_charData.sName;
        // set_st_displayBoxes[2] = cIn;
        
        // let dIn = st_charData.age;
        // set_st_displayBoxes[3] = dIn;
        
        // let eIn = st_charData.race;
        // set_st_displayBoxes[4] = eIn;
        
        // let fIn = st_charData.gender;
        // set_st_displayBoxes[5] = fIn;
        
        // let gIn = st_charData.classType;
        // set_st_displayBoxes[6] = gIn;
        
        // let hIn = st_charData.level;
        // set_st_displayBoxes[7] = hIn;

        // console.log("In useEffect:\naIn is: "
        //             +aIn);

    }, [st_charData, st_displayBoxes]);

//onclick function to EDIT a record
    const fireEditRecord = () =>
{
    console.log("fireEditRecord was fired!\n");    
}

//this is an onClick function that loads data from character
//objects in to display boxes
function BarkCharData(idIn){
    console.log("\n=-=-=-=----------=-=-=-=\n");
// console.log("BarkCharData fired with '"+idIn+"' as its input");

    //set the st_charData state to contain whatever character was selected
    
    try{
            set_st_charData({
            id: ar_charBin[idIn-1].id,
            fName: ar_charBin[idIn-1].first_name,
            sName: ar_charBin[idIn-1].second_name,
            age: ar_charBin[idIn-1].age,
            gender: ar_charBin[idIn-1].gender,
            race: ar_charBin[idIn-1].race,
            classType:ar_charBin[idIn-1].classType,
            level: ar_charBin[idIn-1].level
        })
            console.log("After setting (with idIN: "+idIn+"), st_charData is now:/n");
            console.log(st_charData);
    }   
        
    catch(e)
        {
            console.log("\n\nPants were shat in:\n\t'barkCharData' function:\n" +e)
        }                    
}

//onclick function to CREATE a record
function fireNewRecord()
{
    console.log("fireNewRecord was fired!");
    //need to set character useState to blank for a new record
        set_st_charData("", "", "", "", "", "", "", "");
    //need to enable all text inputs
        set_st_displayBoxes()
    //need to disable new, edit buttons
}

//onclick function to SAVE a record
function fireSaveRecord()
{
    console.log("fireSaveRecord was fired!");

}

function fireDeleteRecord()
{
    console.log("fireDeleteRecord was fired!");
    //Unlock fields to edit
}

//This handles changing data in the display fields. 
function displayChangeHandler(e)
    {
        try{
            console.log("CHANGE event fired!");
            
            //update the useState with the change
            set_st_charData({ ...st_charData, [e.target.name]: [e.target.value] });
        }
        catch(error){
            console.log("Bowel movement detected in 'displayChangeHandler': "+error);
        }
    }

//=====-----=====-----=====-----=====----→APP RENDERING HERE←-----=====-----=====-----=====-----=====
return(
    <>
{/* Wrapper for entire component */}
        <Wrapper>
            <h2>Expanding Clickable Table</h2>
            <Table>

                <TableHead>
                <tr>
                    <th>
                        Character Name
                    </th>
                    <th>
                        Class
                    </th>
                </tr>
                </TableHead>

                <tbody>
                    {ar_charBin.map((character) => (
                    <TableRow key={character.id} onClick={() => BarkCharData(character.id)}>
                        <td>{character.full_name}</td>
                        <td>Level {character.level} {character.classType}</td>
                    </TableRow> 
                    ))}
                </tbody>
            </Table>

{/* COntainer for button elements */}
            <Wrapper inputWidth="auto">
            <h2>Object elements</h2>
            <Wrapper inputFlexDirection = "row" inputWidth="360px">
                <h2>Character Editing</h2>
                <RowSpacer/>
                <Button id="btn_new" onClick={fireNewRecord} disabled={false}>New</Button>
                <Button id="btn_edit" onClick={fireEditRecord} disabled={true}>Edit</Button>
                <Button id="btn_save" onClick={fireSaveRecord} disabled={true}>Save</Button>
                <Button id="btn_delete" onClick={fireDeleteRecord} disabled={true}>Delete</Button>
            </Wrapper>
            
<Table inputWidth="60%">

{/* First half of table, including header, for character records */}
<TableHead>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Surname</th>
    <th>Age</th>
</tr>
</TableHead>
<tr>
    <td>
        <TextInput 
            type="text" 
            id="txt_idField" 
            name="id" 
            placeholder="ID" 
            disabled={true} 
            value={st_charData.char_id}
            onChange={displayChangeHandler}
        />
    </td>
    <td>
        <TextInput 
            type="text" 
            id="txt_fNameField" 
            name ="fName" 
            placeholder="First Name" 
            disabled={true} 
            value={st_charData.char_fName}
            onChange={displayChangeHandler}
        />
    </td>
    <td>
        <TextInput 
            type="text" 
            id="txt_sNameField"
            name="sName" 
            placeholder="Second Name" 
            disabled={true} 
            value={st_charData.char_sName}
            onChange={displayChangeHandler}
        />
    </td>
    <td>
        <TextInput 
            type="text" 
            id="txt_ageField" 
            name="age"
            placeholder="Age" 
            disabled={true}
            value={st_charData.char_age}
            onChange={displayChangeHandler}
        />
    </td>
</tr>
{/* Second half of table for character records */}
<TableHead>
<tr>
    <th>Gender</th>
    <th>Race</th>
    <th>Class</th>
    <th>Level</th>
</tr>
</TableHead>

<tr>
<td>
    <TextInput 
        type="text" 
        id="txt_genderField"
        name="gender" 
        placeholder="Gender" 
        disabled={true}
        value={st_charData.char_gender} 
        onChange={displayChangeHandler}
    />
</td>
<td>
    <TextInput 
        type="text" 
        id="txt_raceField"
        name="race" 
        placeholder="Race" 
        disabled={true}
        value={st_charData.char_race}
        onChange={displayChangeHandler} 
    />
</td>
<td>
    <TextInput 
        type="text" 
        id="txt_classField"
        name="classType"
        placeholder="Class" 
        disabled={true} 
        value={st_charData.char_class}
        onChange={displayChangeHandler} 
    />
</td>
<td>
    <TextInput 
        type="text" 
        id="txt_levelField"
        name="level"
        placeholder="Level" 
        disabled={true} 
        value={st_charData.char_level}
        onChange={displayChangeHandler} 
    />
</td>
</tr>
</Table>        
        </Wrapper>
        </Wrapper>
    </>
)


}