import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Activities from "./components/Activities";
import Background from "./components/Background";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Router>
      <div>
        {/* < TopBar /> */}
        < NavBar />
        < Background />
        < Activities />
        < Booking />
        < Contact />
        < Footer />
        <History />
      </div>
    </Router>
  );
}

export default App;
