import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import MainPage from "./Routes/MainPage/MainPage";
import { HelmetProvider } from 'react-helmet-async';
import { AboutUs } from "./Routes/AboutUs/AboutUs";
import MyTeam from "./Routes/Team/MyTeam";
import Services from "./Routes/services/Services";
const App = () => {
  return (
    <HelmetProvider>
    <Router>
      <Navigation />
    <Routes>
      <Route  path="/" element={<MainPage/>} />
      <Route  path="/about" element={<AboutUs/>} />
      <Route  path="/team" element={<MyTeam/>} />
      <Route  path="/services" element={<Services/>} />
    </Routes>
    <Footer/>
  </Router>
  </HelmetProvider>
  )
}

export default App