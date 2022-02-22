import { ExpTable } from "./Components/C-ExpTable";
import { Main } from "./Components/C-Main"
import { Websock } from "./Components/C-Websocket";
import { 
      GlobalStyle
   } from "./styles";

function App() {
  return (
    <>
    <GlobalStyle />
      <Main/>
      <Websock/>
    </>
  );
}

export default App;
