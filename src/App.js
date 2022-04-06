import React from "react";
//import { ExpTable } from "./Components/C-ExpTable";
import { Main } from "./Components/C-Main"
import { NpcGenerator } from "./Components/C-NpcGenerator";
import { 
  GlobalStyle
} from "./styles";

const { MongoClient } = require ("mongodb");

function App() {

  async function shitpram()
  {
    const mongoURI = "mongodb+srv://Bnag7888:Cn6yYfSWP9N9VLBG@npcdb.fkyef.mongodb.net/NPCdb?retryWrites=true&w=majority";
    
    const client = new MongoClient(mongoURI);

    await client.connect();
  }
  
  
  
  return (
    <>
    <GlobalStyle />
      <Main/>
      <NpcGenerator/>
    </>
  );
}

export default App;
