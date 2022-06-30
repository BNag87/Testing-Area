import React from "react";
import { Routes, Route} from 'react-router-dom'
//import { ExpTable } from "./Components/C-ExpTable";
import { Main } from "./Components/Minor Components/C-Main.js";
import { MerchantGenerator } from "./Components/Major Components/C-MerchantGenerator";
import { NpcGenerator } from "./Components/Major Components/C-NpcGenerator";
import { PageTopbar } from "./Components/Minor Components/C-PageTopbar";

//ANIMATED BACKGROUND COMPONENT
import { AnimatedBG } from "./Components/Minor Components/C-AnimatedBG.js";

import { 
  GlobalStyle
} from "./styles";



function App() {
  
  return (
    <>
    <GlobalStyle/>
    <PageTopbar/>
    
    

    <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="NPCGenerator" element={ <NpcGenerator/>} />
        <Route path="MerchantList" element={ <MerchantGenerator/>} />
    </Routes>
    
    <AnimatedBG/>

    </>
  )
}

export default App;
