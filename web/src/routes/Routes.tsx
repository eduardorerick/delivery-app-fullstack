import { BrowserRouter, Routes as DomRoutes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </DomRoutes>
    </BrowserRouter>
  );
}
