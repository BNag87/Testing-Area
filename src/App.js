import React from "react";
//import { ExpTable } from "./Components/C-ExpTable";
import { Main } from "./Components/C-Main"
import { MerchantGenerator } from "./Components/C-MerchantGenerator";
import { NpcGenerator } from "./Components/C-NpcGenerator";
import { 
  GlobalStyle
} from "./styles";



function App() {
  
  return (
    <>
    <GlobalStyle />
      <Main/>
      <MerchantGenerator/>
      <NpcGenerator/>
    </>
  );
}

export default App;
