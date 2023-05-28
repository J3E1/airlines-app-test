import './Loader.scss';

type Props = {};
export default function Loader({}: Props) {
	return (
		<div className='overlay'>
			<div className='custom-loader'></div>
		</div>
	);
}
