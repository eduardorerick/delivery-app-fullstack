import { BrowserRouter, Routes as DomRoutes, Route } from "react-router-dom";
import { Login } from "../pages/Login";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<Login />} />
      </DomRoutes>
    </BrowserRouter>
  );
}
