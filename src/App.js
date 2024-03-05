import { Page } from "./components/Pages/Page";
import AppContext from "./components/AppContext/AppContext";
function App() {
  return (
    <AppContext>
      <Page></Page>
    </AppContext>
  );
}

export default App;
