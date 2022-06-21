import React from "react";
//import { ExpTable } from "./Components/C-ExpTable";
import { Main } from "./Components/Minor Components/C-Main.js";
import { MerchantGenerator } from "./Components/Major Components/C-MerchantGenerator";
import { NpcGenerator } from "./Components/Major Components/C-NpcGenerator";
import { PageTopbar } from "./Components/Minor Components/C-PageTopbar";
import { 
  GlobalStyle
} from "./styles";



function App() {
  
  return (
    <>
    <GlobalStyle/>
    <PageTopbar/>
    <Main/>
         
    
    {/* <MerchantGenerator/>
      <NpcGenerator/> */}
    </>
  );
}

export default App;
