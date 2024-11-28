import {
	faArrowUpFromBracket,
	faFile,
	faFilter,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import NavLink from '../../elements/NavLink';
import Button from '../../elements/Button';
import ListDocument from '../../elements/ListDocument';
import { useSearchParams } from 'react-router-dom';
// import ModalUploadBKD from '../../components/modals/ModalUploadBKD';
// import ModalUploadSKP from '../../components/modals/ModalUploadSKP';
import { lazy, Suspense, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterDropdown from '../../components/FilterDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { closeDetailLaporan } from '../../redux/actions/detailLaporan';

const ModalUploadBKD = lazy(() =>
	import('../../components/modals/ModalUploadBKD'),
);
const ModalUploadSKP = lazy(() =>
	import('../../components/modals/ModalUploadSKP'),
);

const navigation = [
	{
		name: 'laporan',
		to: '/laporan',
	},
];

const dataBKD = [
	{
		id: 1,
		name: 'Tahun Ajaran 20242',
		status: 0,
	},
	{
		id: 2,
		name: 'Tahun Ajaran 20241',
		status: 1,
	},
	{
		id: 3,
		name: 'Tahun Ajaran 20232',
		status: 2,
	},
	{
		id: 4,
		name: 'Tahun Ajaran 20231',
		status: 2,
	},
];

const dataSKP = [
	{
		id: 1,
		name: 'Tahun 2024',
		status: 0,
	},
	{
		id: 2,
		name: 'Tahun 2023',
		status: 1,
	},
	{
		id: 3,
		name: 'Tahun 2022',
		status: 2,
	},
];

const Laporan = () => {
	const [searchParam] = useSearchParams();
	const dispatch = useDispatch();
	const type = searchParam.get('type');

	const [modalBKD, setModalBKD] = useState(false);
	const [modalSKP, setModalSKP] = useState(false);
	const [filter, setFilter] = useState(false);

	const { openBKD, openSKP } = useSelector((state) => state.laporan);

	const handleOpenModalBKD = () => {
		setModalBKD(!modalBKD);
	};

	const handleOpenModalSKP = () => {
		setModalSKP(!modalSKP);
	};

	const handleOpenFilter = () => {
		setFilter(!filter);
	};

	return (
		<>
			<Suspense>
				{modalBKD || openBKD ? (
					<ModalUploadBKD
						onClick={
							openBKD
								? () => dispatch(closeDetailLaporan())
								: handleOpenModalBKD
						}
						isUpdate={openBKD}
					/>
				) : null}
			</Suspense>

			<Suspense>
				{modalSKP || openSKP ? (
					<ModalUploadSKP
						onClick={
							openSKP
								? () => dispatch(closeDetailLaporan())
								: handleOpenModalSKP
						}
						isUpdate={openSKP}
					/>
				) : null}
			</Suspense>

			<main>
				<Header title="Laporan" navigation={navigation} />

				<main className="w-full h-auto p-5 bg-white rounded drop-shadow-bottom">
					<section className="flex items-center justify-between">
						<aside className="flex items-center gap-3">
							<NavLink
								to={'/laporan?type=bkd'}
								title={'Beban Kerja Dosen'}
								icon={faFile}
								isActive={type === 'bkd' ? true : false}
								isBordered={type !== 'bkd' ? true : false}
								textSize={'sm'}
							/>
							<NavLink
								to={'/laporan?type=skp'}
								title={'Sasaran Kinerja Pegawai'}
								icon={faFile}
								isBordered={type !== 'skp' ? true : false}
								isActive={type === 'skp' ? true : false}
								textSize={'sm'}
							/>
						</aside>

						<aside className="flex items-center gap-3">
							<section className="relative">
								<FontAwesomeIcon
									icon={faFilter}
									className="text-lg text-primary-gray hover:text-dark-gray cursor-pointer"
									onClick={handleOpenFilter}
								/>
								{filter && (
									<FilterDropdown
										onClose={handleOpenFilter}
									/>
								)}
							</section>
							<Button
								title={
									type === 'bkd' ? 'Unggah BKD' : 'Unggah SKP'
								}
								onClick={
									type === 'bkd'
										? handleOpenModalBKD
										: handleOpenModalSKP
								}
								icon={faArrowUpFromBracket}
								color={'primary-blue'}
								textSize={'sm'}
							/>
						</aside>
					</section>

					<main className="mt-5 flex flex-col gap-2 w-full">
						{type === 'bkd' ? (
							dataBKD.map((item) => (
								<ListDocument
									key={item.id}
									type={'BKD'}
									data={item}
								/>
							))
						) : type === 'skp' ? (
							dataSKP.map((item) => (
								<ListDocument
									key={item.id}
									type={'SKP'}
									data={item}
								/>
							))
						) : (
							<p className="text-dark-gray text-xs font-light">
								Data tidak ditemukan
							</p>
						)}
					</main>
				</main>
			</main>
		</>
	);
};

export default Laporan;
