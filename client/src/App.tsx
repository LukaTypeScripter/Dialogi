import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import MainPage from "./Routes/MainPage/MainPage";
import { HelmetProvider } from 'react-helmet-async';
import { AboutUs } from "./Routes/AboutUs/AboutUs";
const App = () => {
  return (
    <HelmetProvider>
    <Router>
      <Navigation />
    <Routes>
      <Route  path="/" element={<MainPage/>} />
      <Route  path="/about" element={<AboutUs/>} />
    </Routes>
    <Footer/>
  </Router>
  </HelmetProvider>
  )
}

export default App