import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import MainPage from "./Routes/MainPage/MainPage";

const App = () => {
  return (
    <Router>
      <Navigation />
    <Routes>
      <Route  path="/" element={<MainPage/>} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App