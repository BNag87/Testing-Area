import { Wrapper } from "../styles"

export const ExpTable = () => {
    return(
        <>
            <Wrapper>
                <h2>Expanding Clickable Table</h2>
                <table>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Class                        </th>
                    </tr>
                    <tr>
                        <td>
                            Saloth Saar
                        </td>

                        <td>
                            Level 10 Sorcerer
                        </td>
                    </tr>
                </table>
            </Wrapper>

        </>
    )
}