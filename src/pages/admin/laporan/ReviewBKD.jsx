import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../elements/Button';
import ListDocument from '../../../elements/ListDocument';
import { useState } from 'react';
import Header from '../../../components/Header';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import FilterDropdown from '../../../components/FilterDropdown';
import FormSelectForSearch from '../../../elements/forms/FormSelectForSearch';

const navigation = [
	{
		name: 'review bkd',
		to: '/admin/reviewBkd',
	},
];

const dataSKP = [
	{
		id: 1,
		name: 'Abdullah Al Faruqi',
		status: 0,
	},
	{
		id: 2,
		name: 'Hidayatullah',
		status: 1,
	},
	{
		id: 3,
		name: 'Zakaria',
		status: 2,
	},
];

const ReviewBKD = () => {
	const [filter, setFilter] = useState(false);

	const handleOpenFilter = () => {
		setFilter(!filter);
	};

	return (
		<>
			<main>
				<Header title="Review BKD" navigation={navigation} />

				<main className="w-full h-auto p-5 bg-white rounded drop-shadow-bottom">
					<section className="flex items-center justify-between">
						<aside className="flex items-center gap-3 w-1/2">
							<FormSelectForSearch />
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
								title={'Belum Direview'}
								color={'light-yellow'}
								textSize={'sm'}
							/>
							<Button
								title={'Revisi'}
								color={'light-red'}
								textSize={'sm'}
							/>
							<Button
								title={'Diterima'}
								color={'light-green'}
								textSize={'sm'}
							/>
						</aside>
					</section>

					<section className="w-full mt-5">
						<p className="font-semibold text-sm">Periode 20242</p>
						<main className="mt-2 flex flex-col gap-2 w-full">
							{dataSKP.map((item) => (
								<ListDocument
									key={item.id}
									type={'BKD'}
									data={item}
									isAdmin
								/>
							))}
						</main>
					</section>
				</main>
			</main>
		</>
	);
};

export default ReviewBKD;
