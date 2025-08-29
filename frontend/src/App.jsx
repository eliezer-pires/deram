import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Conferencia from "./pages/Conferencia";
import Gerencial from "./pages/Gerencial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/conferencia" element={<Conferencia />} />
        <Route path="/gerencial" element={<Gerencial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
