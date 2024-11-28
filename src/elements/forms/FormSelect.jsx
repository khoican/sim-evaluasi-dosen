const FormSelect = (props) => {
	const { name, label, value, onChange, children, variant } = props;

	return (
		<label className="text-xs font-medium">
			{label}

			<select
				name={name}
				value={value}
				onChange={onChange}
				className={`w-full font-normal ${
					variant ? variant : 'text-sm'
				} focus:outline-none focus:border-primary-blue border border-primary-gray rounded`}
			>
				{children}
			</select>
		</label>
	);
};

export default FormSelect;
