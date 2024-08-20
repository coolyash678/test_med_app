import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landingpage';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/InstantConsultant" element={<InstantConsultation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
