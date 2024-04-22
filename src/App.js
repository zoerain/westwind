import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import HeaderNav from "./Components/Header/HeaderNav";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import BoardingPage from "./Components/BoardingPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/boarding" element={<BoardingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
