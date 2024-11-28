const ProfileDesk = (props) => {
	const { title, value } = props;

	return (
		<div>
			<p className="text-xs font-light">{title}</p>
			<h1 className="text-sm font-medium">{value}</h1>
		</div>
	);
};

export default ProfileDesk;
