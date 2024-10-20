import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
	return (
		<div className="bg-light-gray min-h-screen h-auto w-full flex items-start p-2">
			<div className="w-[20%] fixed">
				<Sidebar />
			</div>

			<div className="relative left-[20%] w-[80%]">
				<div className="ps-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
