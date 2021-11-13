import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;