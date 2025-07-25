import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { PortfolioPage } from "./pages/PortfolioPage";
import { CareerPage } from "./pages/CareerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
