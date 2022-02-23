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
    
const Websocket = require("ws");

//=====-----=====-----=====-----=====----→APP RENDERING HERE←-----=====-----=====-----=====-----=====
export const Websock = () => {

    //create the websocket
    const wss = new Websocket.Server({ port: 8082 })
    
    // Connection opened
    wss.on("connection", ws => {
        console.log("A new client has connected!");

        //if connection is lost
        ws.on("close", () => {
            console.log("A client has disconnected");
        });
    });

    //get the text output so it can be changed
    var output = document.getElementById("wsConsole");
    var rsOutput = document.getElementById("wsReadyState");
    
    const connectClickHandler = () => {
        // output.value = "";
        console.log("'Connect' was clicked.");
        output.value = "'Connect' was clicked";
    }

    const disconnectClickHandler = () => {
        // output.value = "";
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
                    <p>Console:</p>
                    <TextInput inputMargin="10px 0px 0px 0px" inputWidth="90%" id="wsConsole" placeholder="Idle" disabled={true}></TextInput>
                    <p>Socket Readystate::</p>
                    <TextInput inputMargin="10px 0px 0px 0px" inputWidth="90%" id="wsReadyState" placeholder="Idle" disabled={true}></TextInput>
                </Wrapper>
            </Wrapper>
            </>
    )
}