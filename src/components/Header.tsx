import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
type Props = {};
export default function Header({}: Props) {
	const { userInfo } = useAppSelector(state => state.auth);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		try {
			dispatch(logout());
			toast.success('You have been logged out');
			navigate('/login');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>AirLine App</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							{userInfo ? (
								<>
									<LinkContainer to='/airlines' className=''>
										<Nav.Link>Airlines</Nav.Link>
									</LinkContainer>
									<NavDropdown title={userInfo.email} id='email'>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>Log In</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
