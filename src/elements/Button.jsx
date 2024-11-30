import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
	const {
		isBordered,
		color = 'primary-blue',
		icon,
		title,
		textSize,
		onClick,
		type = 'button',
	} = props;

	const styleBordered =
		isBordered && color === 'primary-blue'
			? 'border border-primary-blue text-primary-blue hover:text-white hover:bg-primary-blue'
			: isBordered && color === 'primary-gray'
			? 'border border-primary-gray text-primary-gray hover:text-white hover:bg-primary-gray'
			: isBordered && color === 'primary-yellow'
			? 'border border-primary-yellow text-primary-yellow hover:text-white hover:bg-primary-yellow'
			: isBordered && color === 'primary-red'
			? 'border border-primary-red text-primary-red hover:text-white hover:bg-primary-red'
			: isBordered && color === 'primary-green'
			? 'border border-primary-green text-primary-green hover:text-white hover:bg-primary-green'
			: isBordered && color === 'light-blue'
			? 'border border-light-blue text-light-blue hover:text-white hover:bg-light-blue'
			: isBordered && color === 'light-yellow'
			? 'border border-light-yellow text-light-yellow hover:text-white hover:bg-light-yellow'
			: isBordered && color === 'light-red'
			? 'border border-light-red text-light-red hover:text-white hover:bg-light-red'
			: isBordered && color === 'light-green'
			? 'border border-light-green text-light-green hover:text-white hover:bg-light-green'
			: isBordered && color === 'dark-blue'
			? 'border border-dark-blue text-dark-blue hover:text-white hover:bg-dark-blue'
			: isBordered && color === 'dark-yellow'
			? 'border border-dark-yellow text-dark-yellow hover:text-white hover:bg-dark-yellow'
			: isBordered && color === 'dark-red'
			? 'border border-dark-red text-dark-red hover:text-white hover:bg-dark-red'
			: isBordered && color === 'dark-green'
			? 'border border-dark-green text-dark-green hover:text-white hover:bg-dark-green'
			: '';

	const styleFullFill =
		!isBordered && color === 'primary-blue'
			? 'bg-primary-blue text-white hover:bg-dark-blue'
			: !isBordered && color === 'primary-gray'
			? 'bg-primary-gray text-white hover:bg-dark-gray'
			: !isBordered && color === 'primary-yellow'
			? 'bg-primary-yellow text-black hover:bg-dark-yellow'
			: !isBordered && color === 'primary-red'
			? 'bg-primary-red text-white hover:bg-dark-red'
			: !isBordered && color === 'primary-green'
			? 'bg-primary-green text-white hover:bg-dark-green'
			: !isBordered && color === 'light-blue'
			? 'bg-light-blue text-verydark-blue hover:bg-primary-blue hover:text-white'
			: !isBordered && color === 'light-yellow'
			? 'bg-light-yellow text-verydark-yellow hover:bg-primary-yellow hover:text-black'
			: !isBordered && color === 'light-red'
			? 'bg-light-red text-verydark-red hover:bg-primary-red hover:text-white'
			: !isBordered && color === 'light-green'
			? 'bg-light-green text-verydark-green hover:bg-primary-green hover:text-white'
			: !isBordered && color === 'dark-gray'
			? 'bg-dark-gray/80 text-white hover:bg-dark-gray'
			: !isBordered && color === 'dark-blue'
			? 'bg-dark-blue text-white hover:bg-verydark-blue'
			: !isBordered && color === 'dark-yellow'
			? 'bg-dark-yellow text-white hover:bg-verydark-yellow'
			: !isBordered && color === 'dark-red'
			? 'bg-dark-red text-white hover:bg-verydark-red'
			: !isBordered && color === 'dark-green'
			? 'bg-dark-green text-white hover:bg-verydark-green'
			: null;

	return (
		<button
			onClick={onClick}
			type={type}
			className={`flex items-center gap-2 font-medium rounded ${
				isBordered ? styleBordered : styleFullFill
			} ${textSize === 'xs' ? 'px-2 py-2' : 'px-3 py-2'} ${
				textSize ? `text-${textSize}` : `text-base`
			}
            `}
		>
			<FontAwesomeIcon
				icon={icon}
				className={`w-4 h-full text-${textSize}`}
			/>
			{title}
		</button>
	);
};

export default Button;
