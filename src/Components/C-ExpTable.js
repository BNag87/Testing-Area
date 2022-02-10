import React, {useState, useRef} from 'react';
import { char_Obj } from "../Reference Files/ObjectDefs"
import { 
    Wrapper,
    Table,
    TableHead,
    TableRow, 
    } from "../styles"

export const ExpTable = () => {

    let Char1 = new char_Obj(1,"Saloth", "Saar", 45, "Male", "Dragonborn", "Sorcerer", 10);
    let Char2 = new char_Obj(2,"Kaedwen", "Isaani", 36, "Male", "Dragonborn", "Sorcerer", 8); 
    let Char3 = new char_Obj(3,"Euridice", "Swiftblade", 23, "Female", "Human", "Bard", 5);
    
    //array to store characters
    let ar_charBin = [];
    
    //push all chars into the array
    ar_charBin.push(Char1, Char2, Char3);

    //useState to store data for populating table
    const [data, setData] = useState([]);

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

                <Wrapper>
                <h2>Object elements</h2>
                <p>These fields should update with object<br/>attributes when the records above are clicked</p>

                <input type="text" id="txt_idField" name ="id_field" placeholder="ID"/>
                <input type="text" id="txt_fNameField" name ="first_name_field" placeholder="First Name" disabled={true} />
                <input type="text" id="txt_sNameField" placeholder="Second Name" disabled={true} />
                <input type="text" id="txt_ageField" placeholder="Age" disabled={true} />
                <input type="text" id="txt_cNameField" placeholder="Full Name" disabled={true} />
                <input type="text" id="txt_genderField" placeholder="Gender" disabled={true} />
                <input type="text" id="txt_raceField" placeholder="Race" disabled={true} />
                <input type="text" id="txt_classField" placeholder="Class" disabled={true} />
                <input type="text" id="txt_levelField" placeholder="Level" disabled={true} />
            </Wrapper>
            </Wrapper>
        </>
    )
  
//this is dummy code
document.getElementById("txt_idField").innerHTML = "Spong";

    //this is an onClick function for use in record rows in the JSX populated table for characters  
    function barkCharData(idIn){
        console.log("==========================");
        
        try{
            //Get the fields...
            let idField = document.getElementById("txt_idField");
            let nameField = document.getElementsByName("first_name_field");

            //Set the fields
            idField.innerHTML = String(ar_charBin[idIn-1].id);
            console.log("\n---> idField: "+idField);
            console.log("---> idField.innerHTML: "+idField.innerHTML+"\n")
            
            nameField.innerHTML = String(ar_charBin[idIn-1].full_name);
            console.log("\n---> nameField: "+nameField);
            console.log("---> nameField.innerHTML: "+nameField.innerHTML+"\n")

        }
        catch(error)
        {
            console.log("Pants were shat in the 'barkCharData' function [line 72]:\n\t" +error)
        }                    
    }
}