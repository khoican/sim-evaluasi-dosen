import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormInput = (props) => {
	const { name, label, placeholder, value, onChange, type, isLink } = props;

	return (
		<label className="text-xs font-medium w-full">
			{label}

			<div className="relative">
				{isLink && (
					<div className="absolute top-[3px] left-1 bg-light-gray py-1 px-3 rounded">
						<FontAwesomeIcon
							icon={faLink}
							className="text-xs relative"
						/>
					</div>
				)}
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					className={
						type === 'file'
							? 'w-full border border-light-gray focus:border-primary-blue text-sm rounded pe-3 file:py-1 file:px-3 file:border-0 file:text-sm file:font-normal file:bg-dark-gray file:bg-opacity-70 file:text-white hover:file:bg-opacity-100'
							: `w-full text-sm focus:outline-none focus:border-primary-blue border border-primary-gray rounded ${
									isLink ? 'pe-2 py-1 ps-12' : 'px-2 py-1'
							  }`
					}
				></input>
			</div>
		</label>
	);
};

export default FormInput;
