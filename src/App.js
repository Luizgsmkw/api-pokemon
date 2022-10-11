
import { RotaApiPoke } from "./components/routes/RotaApiPoke";
import { ThemeProvider } from './components/context/theme-context';
import Header from './components/header/Header'
function App() {
  return (
    <ThemeProvider>
      <Header />
     <RotaApiPoke />
    </ThemeProvider>
  );
}

export default App;
