import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import MainPage from "./Routes/MainPage/MainPage";
import { HelmetProvider } from 'react-helmet-async';
import { AboutUs } from "./Routes/AboutUs/AboutUs";
import MyTeam from "./Routes/Team/MyTeam";
import Services from "./Routes/services/Services";
import SpecificMember from "./Routes/specificMember/SpecificMember";
import Contact from "./Routes/Contact/Contact";
const App = () => {
  return (
    <HelmetProvider>
    <Router>
    <div style={{position:'relative'}}>
      <Navigation />
 

    
    <Routes>
      <Route  path="/" element={<MainPage/>} />
      <Route  path="/about" element={<AboutUs/>} />
      <Route  path="/team" element={<MyTeam/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/team:id" element={<SpecificMember/>} />
      <Route  path="/contact" element={<Contact/>} />
    </Routes>

    <Footer/>
    </div>
  </Router>
  </HelmetProvider>
  )
}

export default App