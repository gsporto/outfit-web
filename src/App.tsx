import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import AppProvider from "./hooks";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <CssBaseline />
    </BrowserRouter>
  );
}

export default App;
