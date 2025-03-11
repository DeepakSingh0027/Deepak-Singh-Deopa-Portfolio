import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Header from "./header/header";
import { ThemeProvider } from "./Context/themeContext";
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
