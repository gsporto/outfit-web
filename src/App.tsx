import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Routes } from './routes';
import { AppProvider } from './hooks';

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
