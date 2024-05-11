import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import HeaderNav from "./Components/Header/HeaderNav";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import BoardingPage from "./Components/BoardingPage";
import HorseSales from "./Components/HorseSales/HorseSales";
import Lessons from "./Components/Lessons";
import Training from "./Components/Training";
import AddHorse from "./Components/HorseSales/AddHorse";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/boarding" element={<BoardingPage />} />
        <Route path="/horsesales" element={<HorseSales />} />
        <Route path="/horsesales/addhorse" element={<AddHorse />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
