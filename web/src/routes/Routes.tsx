import { BrowserRouter, Routes as DomRoutes, Route } from 'react-router-dom';
import { RouterPath } from '../constants/routes';
import { ClientLogin } from '../pages/Client/Login';
import { ClientRegistration } from '../pages/Client/Registration';
import { LandingPage } from '../pages/LandingPage';

export function Routes() {
	return (
		<BrowserRouter>
			<DomRoutes>
				<Route path={RouterPath.LANDING_PAGE} element={<LandingPage />} />
				<Route path={RouterPath.CLIENT_LOGIN} element={<ClientLogin />} />
				<Route path={RouterPath.CLIENT_REGISTRATION} element={<ClientRegistration />} />
			</DomRoutes>
		</BrowserRouter>
	);
}
