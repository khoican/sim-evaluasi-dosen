import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InformationBar = (props) => {
	const { value, subtitle, icon, color } = props;

	return (
		<section className="w-full bg-white flex items-center justify-between p-5 rounded-md drop-shadow-bottom">
			<aside>
				<h1 className="text-xl font-semibold">{value}</h1>
				<p className="text-xs font-light">{subtitle}</p>
			</aside>
			<FontAwesomeIcon icon={icon} className={`text-5xl ${color}`} />
		</section>
	);
};

export default InformationBar;
