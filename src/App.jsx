import { Toaster } from "react-hot-toast";
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

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </ContextProvider>
    </DarkModeProvider>
  );
}

export default App;
