import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activities from "./components/Activities";
import Background from "./components/Background";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import History from "./pages/History";
import Liveliness from "./pages/Liveliness";
import NaturalBeauty from "./pages/NaturalBeauty";

function App() {
  return (
    <Router>
      < Routes>
      <Route path='/' element={
         <div>
         {/* < TopBar /> */}
         < NavBar />
         < Background />
         <Activities/>   
         < Booking />
         < Contact />
         < Footer />
       </div>
         } />
       <Route path='/history' element={<History/>} />
         <Route path='/liveliness' element={<Liveliness/>} />
         <Route path='/natural-beauty' element={<NaturalBeauty/>} />
         
        </Routes>
    </Router>
  );
}

export default App;
