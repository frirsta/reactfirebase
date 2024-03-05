import { Page } from "./components/Pages/Page";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./components/AppContext/AppContext";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Page></Page>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
