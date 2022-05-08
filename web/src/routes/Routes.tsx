import { BrowserRouter, Routes as DomRoutes, Route } from "react-router-dom";
import { RouterPath } from "../constants/routes";
import { ClientLogin } from "../pages/Client/ClientLogin";
import { ClientRegistration } from "../pages/Client/ClientRegistration";
import { DeliveryManLogin } from "../pages/DeliveryMan/DeliveryManLogin";
import { DeliveryManRegistration } from "../pages/DeliveryMan/DeliveryManRegistration";
import { LandingPage } from "../pages/LandingPage";
import { ClientPortal } from "../pages/Client/ClientPortal/ClientPortal";
import { NewDelivery } from "../pages/Client/ClientPortal/NewDelivery";
import { ClientDeliveries } from "../pages/Client/ClientPortal/ClientDeliveries";
import { DeliverymanPortal } from "../pages/DeliveryMan/DeliverymanPortal/DeliverymanPortal";
import { DeliverymanAvailableDeliveries } from "../pages/DeliveryMan/DeliverymanPortal/DeliverymanAvailableDeliveries";
import { DeliverymanDeliveries } from "../pages/DeliveryMan/DeliverymanPortal/DeliverymanDeliveries";

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
        <Route path={RouterPath.CLIENT_PORTAL} element={<ClientPortal />}>
          <Route
            path={RouterPath.CLIENT_PORTAL_NEW_DELIVERY}
            element={<NewDelivery />}
          />
          <Route
            path={RouterPath.CLIENT_PORTAL_DELIVERIES}
            element={<ClientDeliveries />}
          />
        </Route>
        <Route
          path={RouterPath.DELIVERY_MAN_LOGIN}
          element={<DeliveryManLogin />}
        />
        <Route
          path={RouterPath.DELIVERY_MAN_REGISTRATION}
          element={<DeliveryManRegistration />}
        />
        <Route
          path={RouterPath.DELIVERY_MAN_PORTAL}
          element={<DeliverymanPortal />}
        >
          <Route
            path={RouterPath.DELIVERY_MAN_PORTAL_AVAILABLE_DELIVERIES}
            element={<DeliverymanAvailableDeliveries />}
          />
          <Route
            path={RouterPath.DELIVERY_MAN_PORTAL_DELIVERIES}
            element={<DeliverymanDeliveries />}
          />
        </Route>
      </DomRoutes>
    </BrowserRouter>
  );
}
