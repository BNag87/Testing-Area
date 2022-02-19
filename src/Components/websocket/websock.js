//"websock" is responsible for connecting to the azchar backend.
import { process_reply } from "./reqrep";

var response = { text: "No Responses received yet.", rec: false };

var socket = null;

var FlowController = {
    system: { path: null, name: null, cfg: null},
    sheets: [],
    //this is where the character sheet is recived from the database
    character: null,
    last_sender_id: null,
    new_note: null
  };

export var flow_controller = FlowController;

//==============-------------------------==============

export function create_socket(address) 
{
        //"ws://127.0.0.1:55555" is the default address to input
        
    console.log("Getting socket for address: " + address);
    
    let socket = new WebSocket(address);
    socket.onopen = function(e) 
    {
        console.log("Socket is open.");
    };

    //listener for messages from server
    socket.onmessage = function(e) 
        {
            console.log("Message received.");
            try
            {
                flow_controller = process_reply(JSON.parse(e.data), flow_controller);
            }
            catch(e)
            {
                console.log("Bowels voided in 'socket.onmessage': "+e)
            }
        };

    socket.onsend = function(e) 
        {
            console.log("Sent a message");
        };

    socket.onclose = function(e) 
        {
            console.log("Socket is closing, recreating...");
            socket = create_socket(address);
        };

    socket.onerror = function(e) 
        {
            console.log("Socket error: " + e.message);
        };

        return socket;
}


