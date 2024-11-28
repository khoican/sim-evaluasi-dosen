import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FormPassword = (props) => {
	const { name, label, placeholder, value, onChange } = props;
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<label className="text-xs font-medium">
			{label}

			<div className="relative">
				<input
					type={showPassword ? 'text' : 'password'}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					className={`w-full text-sm focus:outline-none focus:border-primary-blue border border-primary-gray rounded ps-2 py-1 pe-12`}
				></input>
				<div
					className="absolute top-[3px] right-1 py-1 px-3 rounded cursor-pointer"
					onClick={togglePasswordVisibility}
				>
					<FontAwesomeIcon
						icon={showPassword ? faEyeSlash : faEye}
						className="text-xs relative"
					/>
				</div>
			</div>
		</label>
	);
};

export default FormPassword;
