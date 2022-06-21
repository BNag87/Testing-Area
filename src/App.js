import React from "react";
//import { ExpTable } from "./Components/C-ExpTable";
import { Main } from "./Components/Minor Components/C-Main.js";
import { MerchantGenerator } from "./Components/Major Components/C-MerchantGenerator";
import { NpcGenerator } from "./Components/Major Components/C-NpcGenerator";
import { Sidebar } from "./Components/Minor Components/C-Sidebar";
import { 
  GlobalStyle
} from "./styles";



function App() {
  
  return (
    <>
    <GlobalStyle/>
      <Main>
        <Sidebar/>
      </Main>
         
    
    {/* <MerchantGenerator/>
      <NpcGenerator/> */}
    </>
  );
}

export default App;
