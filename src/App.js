import React from "react";
import Activities from "./components/Activities";
import Background from "./components/Background";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      < TopBar />
      < NavBar/>
      < Background/>
      < Activities/>
      < Booking />
      < Contact />
      < Footer />
    </div>
  );
}

export default App;
