import { useDispatch } from 'react-redux';
import {
	detailLaporanBKD,
	detailLaporanSKP,
} from '../redux/actions/detailLaporan';

const ListDocument = (props) => {
	const { type, data, isAdmin } = props;
	const dispatch = useDispatch();

	const handleDetailBKD = () => {
		dispatch(detailLaporanBKD(data.id));
	};

	const handleDetailSKP = () => {
		dispatch(detailLaporanSKP(data.id));
	};

	const initialStatus = [
		{
			title: 'Terkirim',
			style: 'bg-light-yellow text-verydark-yellow',
		},
		{
			title: 'Revisi',
			style: 'bg-light-red text-verydark-red',
		},
		{
			title: 'Diterima',
			style: 'bg-light-green text-verydark-green',
		},
	];

	return (
		<section
			className="flex items-center justify-between border-b border-primary-gray p-2 cursor-pointer hover:bg-light-gray"
			onClick={
				type === 'BKD' && !isAdmin
					? handleDetailBKD
					: type === 'SKP' && !isAdmin && handleDetailSKP
			}
		>
			<aside className="flex items-center gap-3">
				<div className="p-2 bg-light-blue rounded text-verydark-blue text-xs font-medium uppercase">
					<p>{type}</p>
				</div>
				<h3 className="font-medium text-sm">{data.name}</h3>
			</aside>

			<section className="flex items-center gap-2">
				<aside
					className={`p-2 rounded text-xs font-medium ${
						initialStatus[data.status].style
					}`}
				>
					<p>{initialStatus[data.status].title}</p>
				</aside>

				{isAdmin && (
					<aside
						className={`p-2 rounded text-xs font-medium border border-primary-blue text-primary-blue`}
					>
						<p>Hari Ini</p>
					</aside>
				)}
			</section>
		</section>
	);
};

export default ListDocument;
