import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useAppSelector } from '../app/hooks';
import { login, loginWithGoogle } from '../features/auth/authSlice';

const SignInPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { userInfo } = useAppSelector(state => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate('/');
		}
	}, [navigate, userInfo]);

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			dispatch(login({ email, password }));
			toast.success('Login successful');
			navigate('/');
		} catch (err) {
			if (err instanceof Error) toast.error(err.message);
		}
	};

	const loginWithGoogleHandler = () => {
		dispatch(loginWithGoogle());
		toast.success('Login successful');
		navigate('/');
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>

			<Form onSubmit={submitHandler}>
				<Form.Group className='my-2' controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={e => setEmail(e.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group className='my-2' controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={e => setPassword(e.target.value)}></Form.Control>
				</Form.Group>

				<Button type='submit' variant='dark' className='mt-3 w-100'>
					Sign In
				</Button>
			</Form>
			<Button
				type='submit'
				variant='secondary'
				className='mt-3 w-100'
				onClick={loginWithGoogleHandler}>
				<svg
					viewBox='0 0 1024 1024'
					fill='currentColor'
					height='1.5rem'
					width='1.5rem'
					className='mx-2'>
					<path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z' />
				</svg>
				Sign In With Google
			</Button>
		</FormContainer>
	);
};

export default SignInPage;
