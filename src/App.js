
import { RotaApiPoke } from "./components/routes/RotaApiPoke";
import { ThemeProvider } from './components/context/theme-context';

function App() {
  return (
    <ThemeProvider>
      
     <RotaApiPoke />
    </ThemeProvider>
  );
}

export default App;
