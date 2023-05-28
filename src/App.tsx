import 'bootstrap/dist/css/bootstrap.css';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const router = new UniversalRouter([
// 	{ path: '/', action: () => <HomePage /> },
// 	{
// 		path: '/airlines',
// 		action: () => <AirlineListPage />,
// 		children: [{ path: ':id', action: () => <EditAirlinePage /> }],
// 	},
// ]);

function App() {
	// const [routeComponent, setRouteComponent] = useState<JSX.Element | null>(
	// 	null
	// );

	// useEffect(() => {
	// 	const handleRouteChange = async () => {
	// 		const element = await router.resolve(location.pathname);
	// 		setRouteComponent(element!);
	// 	};

	// 	handleRouteChange(); // Handle initial route
	// 	window.addEventListener('popstate', handleRouteChange); // Handle route changes

	// 	return () => {
	// 		window.removeEventListener('popstate', handleRouteChange); // Clean up listener
	// 	};
	// }, []);

	// if (routeComponent === null) return <Loader />;

	// return <div>{routeComponent}</div>;
	return (
		<>
			<Header />
			<ToastContainer />
			<Container className='my-2'>
				<Outlet />
			</Container>
		</>
	);
}

export default App;
