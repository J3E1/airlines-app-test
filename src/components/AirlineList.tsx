import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useGetAllAirlinesQuery } from '../features/airline/airlineEndpoints';
import Loader from './Loader';
import { useEffect, useReducer } from 'react';
import { setAirlines } from '../features/airline/airlineSlice';
import './AirlineList.scss';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const columnHelper = createColumnHelper<Airline>();

const columns = [
	columnHelper.accessor('id', {
		cell: info => info.getValue(),
		footer: info => info.column.id,
	}),

	columnHelper.accessor('name', {
		header: () => 'Name',
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('country', {
		header: () => 'Country',
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('head_quaters', {
		header: () => 'Head Quatres',
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('established', {
		header: () => 'Established',
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('slogan', {
		header: () => 'Slogan',
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('website', {
		header: () => 'Website',
		cell: info => info.renderValue(),
		footer: info => info.column.id,
	}),
	columnHelper.accessor('logo', {
		header: () => 'Logo',
		cell: info => (
			<img src={info.row.original.logo} alt='Logo' className='logo' />
		),
	}),
];

type Props = {};
export default function AirlineList({}: Props) {
	const { airlines } = useAppSelector(state => state.airline);
	const { data, isFetching } = useGetAllAirlinesQuery({});
	const dispatch = useAppDispatch();

	useEffect(() => {
		data && dispatch(setAirlines(data.slice(0, 10)));
	}, []);

	const table = useReactTable({
		data: airlines ?? [],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	if (isFetching) return <Loader />;

	return (
		<div className='container table-responsive py-5 px-0'>
			<table className='table table-bordered table-hover'>
				<thead className='thead-dark'>
					{table.getHeaderGroups().map(headerGroup => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map(header => (
								<th className='col' key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row, i) => (
						<LinkContainer to={`/airlines/${i}`}>
							<tr key={i}>
								{row.getVisibleCells().map((cell, i) => (
									<td key={i}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						</LinkContainer>
					))}
				</tbody>
			</table>
		</div>
	);
}
