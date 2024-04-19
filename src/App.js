import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import HeaderNav from "./Components/Header/HeaderNav";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
