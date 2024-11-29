import { Outlet } from 'react-router-dom';
import SidebarAdmin from '../components/SidebarAdmin';

const AdminLayout = () => {
	return (
		<div className="bg-light-gray min-h-screen h-auto w-full flex items-start p-2">
			<div className="w-[20%] fixed">
				<SidebarAdmin />
			</div>

			<div className="relative left-[20%] w-[80%]">
				<div className="px-6">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
