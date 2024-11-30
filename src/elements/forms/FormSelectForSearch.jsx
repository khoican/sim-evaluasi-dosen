import Select from 'react-select';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormSelectForSearch = ({ options, onInputChange, onChange }) => {
	const customStyles = {
		control: (provided) => ({
			...provided,
			padding: '0 8px',
			borderRadius: '8px',
			border: '1px solid #ccc',
			boxShadow: 'none',
			minHeight: '40px',
			width: '350px',
			cursor: 'pointer',
		}),
		placeholder: (provided) => ({
			...provided,
			color: '#aaa',
		}),
		indicatorsContainer: () => ({
			display: 'flex',
			alignItems: 'center',
			padding: '0 8px',
		}),
		dropdownIndicator: () => ({
			display: 'none',
		}),
		input: (provided) => ({
			...provided,
			margin: '0',
			padding: '0',
		}),

		menu: (provided) => ({
			...provided,
			zIndex: 10,
		}),
	};

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Select
				options={options}
				styles={customStyles}
				placeholder="Cari Dosen..."
				onInputChange={onInputChange}
				onChange={onChange}
				isClearable
			/>
			<FontAwesomeIcon
				icon={faSearch}
				style={{
					position: 'absolute',
					right: '10px',
					color: '#aaa',
					pointerEvents: 'none',
				}}
			/>
		</div>
	);
};

export default FormSelectForSearch;
