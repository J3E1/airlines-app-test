import { Card, Container } from 'react-bootstrap';

type Props = {};
export default function HomePage({}: Props) {
	return (
		<div className=' py-5'>
			<Container className='d-flex justify-content-center'>
				<Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
					<h1 className='text-center mb-4'>Airlines App</h1>
					<p className='text-center mb-4'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil non
						praesentium a.
					</p>
				</Card>
			</Container>
		</div>
	);
}
