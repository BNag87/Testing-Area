// import { WebSocket } from "ws";
import { 
    Wrapper,
    Table,
    TableHead,
    TableRow,
    Button,
    RowSpacer,
    TextInput, 
    } from "../styles";
    
    
//=====-----=====-----=====-----=====----→APP RENDERING HERE←-----=====-----=====-----=====-----=====
export const Websock = () => {

    //create the websocket
    // var socket = new Websocket("ws://localhost:5050");

    // Connection opened
    // socket.addEventListener('open', (event) => {
    // socket.send('Hello Server!');
    // });

    //get the text output so it can be changed
    var output = document.getElementById("wsConsole");


    const connectClickHandler = () => {
        output.value = "";
        console.log("'Connect' was clicked.");
        output.value = "'Connect' was clicked";
        
    }

    const disconnectClickHandler = () => {
        output.value = "";
        console.log("'Disconnect' was clicked.")
        output.value = "'Disconnect' was clicked";
    }


    return(
            <>
            <Wrapper>
                <h2>Websocket Testing</h2>
                <Wrapper inputFlexDirection="row">
                    <Button inputWidth="120px" onClick={connectClickHandler}>Connect</Button>
                    <Button inputWidth="120px"onClick={disconnectClickHandler} >Disconnect</Button>
                    <RowSpacer/>
                    <TextInput inputMargin="10px 0px 0px 0px" inputWidth="90%" id="wsConsole" placeholder="Idle" disabled={true}></TextInput>
                </Wrapper>
            </Wrapper>
            </>
    )

}