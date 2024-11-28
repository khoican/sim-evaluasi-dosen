import Button from '../elements/Button';
import FormSelect from '../elements/forms/FormSelect';

const FilterDropdown = (props) => {
	const { onClick, onClose } = props;

	let inputYear = [];
	const getYear = new Date().getFullYear();

	for (let i = 0; i < 10; i++) {
		inputYear.push(getYear - i);
	}

	return (
		<div className="absolute bg-white z-10 drop-shadow-bottom p-3 rounded right-0 w-80 flex flex-col gap-3">
			<FormSelect name="filter" label="Dari">
				<option>Pilih Tahun</option>
				{inputYear.map((item) => (
					<option key={item}>{item}</option>
				))}
			</FormSelect>
			<FormSelect name="filter" label="Sampai">
				<option>Pilih Tahun</option>
				{inputYear.map((item) => (
					<option key={item}>{item}</option>
				))}
			</FormSelect>

			<section className="flex justify-end gap-2">
				<Button
					title={'Batal'}
					textSize={'sm'}
					color={'dark-red'}
					onClick={onClose}
					isBordered
				/>
				<Button
					title={'Cari'}
					textSize={'sm'}
					color={'primary-blue'}
					onClick={onClick}
				/>
			</section>
		</div>
	);
};

export default FilterDropdown;
