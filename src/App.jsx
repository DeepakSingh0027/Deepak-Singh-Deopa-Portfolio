import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./header/header";
function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
