import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rocket from "./Rocket";
import Modal from "./components/Modal";
import ModalRocket from "./components/ModalRocket.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rocket" element={<Rocket/>} />
        <Route path="/Modal" element={<Modal/>}/>
        <Route path="/ModalRocket" element={<ModalRocket/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
