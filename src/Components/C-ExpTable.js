import React, {useState} from 'react';
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
    let Char3 = new char_Obj(3,"Euridice", "Eurodollar", 23, "Female", "Human", "Bard", 5);
    
    //array to store characters
    let ar_charBin = [];
    
    //push all chars into the array
    ar_charBin.push(Char1, Char2, Char3);

    //useState to store data for populating table
    const [data, setData] = useState([]);

    function barkCharData(){
        console.log("barkCharData was fired! InputId was: tbd")
    }


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
                            <TableRow key={character.id} onclick="barkCharData()">
                                <td>{character.full_name}</td>
                                <td>Level {character.level} {character.classType}</td>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>

                <Wrapper>
                <h2>Object elements</h2>
                <p>These fields should update with object<br/>attributes when the records above are clicked</p>

                <input type="text" name="idField" placeholder="ID" disabled="true" />
                <input type="text" name="fNameField" placeholder="First Name" disabled="true" />
                <input type="text" name="sNameField" placeholder="Second Name" disabled="true" />
                <input type="text" name="ageField" placeholder="Age" disabled="true" />
                <input type="text" name="sNameField" placeholder="Second Name" disabled="true" />
                <input type="text" name="genderField" placeholder="Gender" disabled="true" />
                <input type="text" name="raceField" placeholder="Race" disabled="true" />
                <input type="text" name="classField" placeholder="Class" disabled="true" />
                <input type="text" name="levelField" placeholder="Level" disabled="true" />
            </Wrapper>
            </Wrapper>
        </>
    )
}