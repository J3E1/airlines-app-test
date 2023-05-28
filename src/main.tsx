import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import './index.scss';
import HomePage from './pages/HomePage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.tsx';
import AirlineListPage from './pages/AirlineListPage.tsx';
import EditAirlinePage from './pages/EditAirlinePage.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='/login' element={<SignInPage />} />
			<Route path='' element={<PrivateRoute />}>
				<Route index={true} path='/' element={<HomePage />} />
				<Route path='/airlines' element={<AirlineListPage />} />
				<Route path='/airlines/:id' element={<EditAirlinePage />} />
				{/* <Route path='/profile' element={<ProfileScreen />} /> */}
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
