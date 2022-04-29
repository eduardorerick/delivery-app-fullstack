import { BrowserRouter, Routes as DomRoutes, Route } from "react-router-dom";
import { RouterPath } from "../constants/routes";
import { ClientLogin } from "../pages/Client/ClientLogin";
import { ClientRegistration } from "../pages/Client/ClientRegistration";
import { DeliveryManLogin } from "../pages/DeliveryMan/DeliveryManLogin";
import { DeliveryManRegistration } from '../pages/DeliveryMan/DeliveryManRegistration';
import { LandingPage } from "../pages/LandingPage";

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path={RouterPath.LANDING_PAGE} element={<LandingPage />} />
        <Route path={RouterPath.CLIENT_LOGIN} element={<ClientLogin />} />
        <Route
          path={RouterPath.CLIENT_REGISTRATION}
          element={<ClientRegistration />}
        />
        <Route
          path={RouterPath.DELIVERY_MAN_LOGIN}
          element={<DeliveryManLogin />}
        />
        <Route
          path={RouterPath.DELIVERY_MAN_REGISTRATION}
          element={<DeliveryManRegistration />}
        />
      </DomRoutes>
    </BrowserRouter>
  );
}
