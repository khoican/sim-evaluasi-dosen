import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="bg-light-gray min-h-screen h-auto">
			<h1>Main</h1>
			<Outlet />
		</div>
	);
};

export default MainLayout;
