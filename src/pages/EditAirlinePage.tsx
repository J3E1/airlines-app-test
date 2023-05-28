import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import type { ChangeEvent } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteAirline, updateAirline } from '../features/airline/airlineSlice';

type Props = {};
export default function EditAirlinePage({}: Props) {
	const { airlines } = useAppSelector(state => state.airline);
	const { id } = useParams();
	const [airline, setAirline] = useState(airlines![+id!]);
	const [editMode, setEditMode] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setAirline(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const submitHandler = async () => {
		if (editMode) {
			setEditMode(false);
			dispatch(updateAirline(airline));
			toast.success('Airline updated successfully');
		} else {
			setEditMode(true);
		}
	};
	const deleteHandler = () => {
		if (editMode) dispatch(deleteAirline(airline));
		navigate('/airlines');
		toast.success('Airline deleted successfully');
	};

	return (
		<Container>
			<Row className='justify-content-md-center mt-5'>
				<Card>
					{!editMode ? (
						<>
							<Card.Header as='h5'>
								Head Quatres: {airline.head_quaters}
							</Card.Header>
							<Card.Img variant='top' src={airline.logo} />
							<Card.Body>
								<Card.Title>{airline.name}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									{airline.website}
								</Card.Subtitle>
								<Card.Text>{airline.slogan}</Card.Text>
								<Card.Subtitle className='mb-2 text-muted'>
									{airline.country}
								</Card.Subtitle>
							</Card.Body>
							<footer className='blockquote-footer'>
								Established in{' '}
								<cite title='Source Title'>{airline.established}</cite>
							</footer>
						</>
					) : (
						<Form>
							<Form.Group className='my-2' controlId='head_quaters'>
								<Form.Label>Head Quatres:</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Head Quatres'
									value={airline.head_quaters}
									name='head_quaters'
									onChange={changeHandler}></Form.Control>
							</Form.Group>
							<Form.Group className='my-2' controlId='country'>
								<Form.Label>Country:</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter country'
									value={airline.country}
									name='country'
									onChange={changeHandler}></Form.Control>
							</Form.Group>
							<Form.Group className='my-2' controlId='established'>
								<Form.Label>Established:</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter established'
									value={airline.established}
									name='established'
									onChange={changeHandler}></Form.Control>
							</Form.Group>
							<Form.Group className='my-2' controlId='name'>
								<Form.Label>Name:</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter name'
									value={airline.name}
									name='name'
									onChange={changeHandler}></Form.Control>
							</Form.Group>
							<Form.Group className='my-2' controlId='slogan'>
								<Form.Label>Slogan:</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter slogan'
									value={airline.slogan}
									name='slogan'
									onChange={changeHandler}></Form.Control>
							</Form.Group>
						</Form>
					)}
					{editMode && (
						<Button variant='danger' className='mt-4' onClick={deleteHandler}>
							Delete
						</Button>
					)}
					<Button variant='dark' className='my-4' onClick={submitHandler}>
						Edit
					</Button>
				</Card>
			</Row>
		</Container>
	);
}
