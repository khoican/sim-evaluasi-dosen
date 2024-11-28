import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
	const { to, title, icon, isActive, isBordered, textSize, isDangerous } =
		props;

	return (
		<Link
			to={to}
			className={`flex items-center gap-2 font-medium py-2 px-3 rounded ${
				isActive
					? 'bg-primary-blue text-white hover:bg-dark-blue'
					: isDangerous && isBordered
					? 'border border-primary-red text-primary-red hover:bg-primary-red hover:text-white'
					: isBordered
					? 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
					: isDangerous
					? 'bg-primary-red text-white hover:bg-dark-red'
					: 'text-black hover:bg-primary-blue hover:text-white'
			} ${textSize ? `text-${textSize}` : `text-base`}
			
			`}
		>
			<FontAwesomeIcon icon={icon} className="w-6 text-lg" />
			{title}
		</Link>
	);
};

export default NavLink;
