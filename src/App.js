import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Team from "./pages/Team";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Royaliteacademy from "./pages/Royaliteacademy";
import Royalitesolution from "./pages/Royalitesolution";

import './App.css';


function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/team" element={<Team />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/royaliteacademy" element={<Royaliteacademy />} />
            <Route path="/royalitesolution" element={<Royalitesolution />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
