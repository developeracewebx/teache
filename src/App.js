import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;