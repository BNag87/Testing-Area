import React from "react";
import { Routes, Route} from 'react-router-dom'
import { Main } from "./Components/Minor Components/C-Main.js";
import { MerchantGenerator } from "./Components/Major Components/C-MerchantGenerator";
import { NpcGenerator } from "./Components/Major Components/C-NpcGenerator";
import { PageTopbar } from "./Components/Minor Components/C-PageTopbar";
import { TreasureGen } from "./Components/Major Components/C-TreasureGen.js";
import { TreasureGenerator } from "./dbc.js";

//ANIMATED BACKGROUND COMPONENT
import { AnimatedBG } from "./Components/Minor Components/C-AnimatedBG.js";

//Styling imports, styled-components
import { 
  GlobalStyle
} from "./styles";

import { WildSurges } from "./Components/Major Components/C-WildSurges.js";

//shorthand version of console.log
const bark = (input) => {
  console.log(input)
}

function App() {
  
  return (
    <>
    <GlobalStyle/>
    <PageTopbar/>
    
    {/* ROUTES ARE LINKED IN THE SIDEBAR COMPONENT. ENABLE/DISABLE THOSE TOO TO PREVENT ERRORS */}
    <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="NPCGenerator" element={ <NpcGenerator/>} />
        <Route path="WildSurges" element={ <WildSurges/>} />
        <Route path="MerchantList" element={ <MerchantGenerator/>} />    
        <Route path="TreasureGen" element={ <TreasureGen/>} />      
    </Routes>
    
    <AnimatedBG/>

    </>
  )
}

export default App;
