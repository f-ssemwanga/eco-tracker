import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FootPrint } from "./pages/FootPrint";
import { Journey } from "./pages/Journey";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/footprint" element={<FootPrint />} />
      <Route path="/journey" element={<Journey />} />
    </Routes>
  );
};
