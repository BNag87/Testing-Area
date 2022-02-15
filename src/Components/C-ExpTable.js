import React, {useState} from 'react';
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
    
    //array to store characters
    let ar_charBin = [Char1, Char2, Char3];
  
    //useState to store character records
    const [st_charData, set_st_charData] = useState(ar_charBin);  

//APP RENDERING HERE↓
    return(
        <>
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
                        <TableRow key={character.id} onClick={() => barkCharData(character.id)}>
                            <td>{character.full_name}</td>
                            <td>Level {character.level} {character.classType}</td>
                        </TableRow> 
                        ))}
                    </tbody>
                </Table>

                <Wrapper inputWidth="auto">
                <h2>Object elements</h2>
                <Wrapper inputFlexDirection = "row">
                    <h2>Character Editing</h2>
                    <RowSpacer/>
                    <Button>New</Button>
                    <Button>Edit</Button>
                    <Button>Save</Button>
                    <Button>Delete</Button>
                </Wrapper>
                
<Table inputWidth="560px">

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
                name="id_field" 
                placeholder="ID" 
                disabled={true} 
                onChange={displayChangeHandler}
            />
        </td>
        <td>
            <TextInput 
                type="text" 
                id="txt_fNameField" 
                name ="first_name_field" 
                placeholder="First Name" 
                disabled={true} 
                onChange={displayChangeHandler}
            />
        </td>
        <td>
            <TextInput 
                type="text" 
                id="txt_sNameField" 
                placeholder="Second Name" 
                disabled={true} 
                onChange={displayChangeHandler}
            />
        </td>
        <td>
            <TextInput 
                type="text" 
                id="txt_ageField" 
                placeholder="Age" 
                disabled={true} 
                onChange={displayChangeHandler}
            />
        </td>
    </tr>
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
            placeholder="Gender" 
            disabled={true} 
            onChange={displayChangeHandler}
        />
    </td>
    <td>
        <TextInput 
            type="text" 
            id="txt_raceField" 
            placeholder="Race" 
            disabled={true} 
            onChange={displayChangeHandler} 
        />
    </td>
    <td>
        <TextInput 
            type="text" 
            id="txt_classField"
            placeholder="Class" 
            disabled={true} 
            onChange={displayChangeHandler} 
        />
    </td>
    <td>
        <TextInput 
            type="text" 
            id="txt_levelField" 
            placeholder="Level" 
            disabled={true} 
            onChange={displayChangeHandler} 
        />
    </td>
</tr>
</Table>        
            </Wrapper>
            </Wrapper>
        </>
    )



//this is an onClick function for use in record rows in the JSX populated table for characters  
function barkCharData(idIn){

    try{
        //create variables to store selected chardata...
        let var_id = st_charData[idIn-1].id;
        let var_firstName = st_charData[idIn-1].first_name;
        let var_secondName = st_charData[idIn-1].second_name;
        let var_age = st_charData[idIn-1].age;
        let var_gender = st_charData[idIn-1].gender;
        let var_race = st_charData[idIn-1].race;
        let var_classType = st_charData[idIn-1].classType;
        let var_level = st_charData[idIn-1].level;
        
        //create variables to store display elements
        let id_box = document.getElementById("txt_idField");
        let fname_box = document.getElementById("txt_fNameField");
        let sname_box = document.getElementById("txt_sNameField");
        let age_box = document.getElementById("txt_ageField");
        let gender_box = document.getElementById("txt_genderField");
        let race_box = document.getElementById("txt_raceField");
        let classType_box = document.getElementById("txt_classField");
        let level_box = document.getElementById("txt_levelField");
       
        //assign the char data to the relevant box
        id_box.value = var_id;
        fname_box.value = var_firstName;
        sname_box.value = var_secondName;
        age_box.value = var_age;
        gender_box.value = var_gender;
        race_box.value = var_race;
        classType_box.value = var_classType;
        level_box.value = "Level " + var_level;

     }
    
    catch(error)
    {
        console.log("\n\nPants were shat in the 'barkCharData' function:\n\t" +error)
    }                    
}

//This handles changing data in the display fields. 
    //Want to have a css effect fire to visually show the fields have been updated
function displayChangeHandler()
    {
        try{
        console.log("Fired the change event");
        }
        catch(error){
            console.log("Bowel movement detected in 'displayChangeHandler': "+error);
        }
    }

}