import { Link } from 'react-router-dom';

const Header = (props) => {
	const { title, navigation } = props;

	return (
		<div className="py-5 mb-3">
			<h1 className="text-3xl font-semibold tracking-wider uppercase">
				{title}
			</h1>
			<div className="flex gap-2 text-xs font-medium">
				<Link to={'/'}>sisedo</Link>

				{navigation &&
					navigation.map((item) => (
						<Link key={item.name} to={item.to}>
							/ {item.name}
						</Link>
					))}
			</div>
		</div>
	);
};

export default Header;
