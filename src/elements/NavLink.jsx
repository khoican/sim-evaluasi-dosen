import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
	const { to, title, icon, isActive } = props;

	return (
		<Link
			to={to}
			className={`flex items-center gap-2 font-semibold p-2 hover:bg-primary-blue hover:text-white rounded ${
				isActive ? 'bg-primary-blue text-white' : ' text-black'
			}`}
		>
			<div className="w-6">
				<FontAwesomeIcon icon={icon} className="text-xl" />
			</div>
			{title}
		</Link>
	);
};

export default NavLink;
