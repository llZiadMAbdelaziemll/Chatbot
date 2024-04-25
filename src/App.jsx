import ContextProvider from "./context/Context";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./style/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <DarkModeProvider>
      <ContextProvider>
        <GlobalStyles />
        <AppLayout />
      </ContextProvider>
    </DarkModeProvider>
  );
}

export default App;
