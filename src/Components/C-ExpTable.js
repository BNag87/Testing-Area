
import { char_Obj } from "../Reference Files/ObjectDefs"


import { 
    Wrapper,
    Table,
    TableHead,
    TableRow, 
    } from "../styles"

export const ExpTable = () => {
    
    let Char1 = new char_Obj(1,"Saloth", "Saar", 45, "Male", "Dragonborn", "Sorcerer", 10)
    let Char2 = new char_Obj(1,"Kaedwen", "Isaani", 36, "Male", "Dragonborn", "Sorcerer", 7)
    console.log("\nChar1 table data:\n")
    console.table(Char1)

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
                    <TableRow>
                        <td>    
                            {Char1.full_name}
                        </td>

                        <td>
                            Level {Char1.level} {Char1.classType}
                        </td>
                    </TableRow>

                    <TableRow>
                        <td>    
                            {Char2.full_name}
                        </td>

                        <td>
                            Level {Char2.level} {Char2.classType}
                        </td>
                    </TableRow>
                    </tbody>
                </Table>
            </Wrapper>

        </>
    )
}