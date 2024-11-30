import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayouts';
import Dashboard from '../pages/lecturer/Dashboard';
import Laporan from '../pages/lecturer/Laporan';
import User from '../pages/lecturer/users/User';
import EditUser from '../pages/lecturer/users/EditUser';
import ChangePassword from '../pages/lecturer/users/ChangePassword';
import AdminLayout from '../layouts/AdminLayout';
import DashboardAdmin from '../pages/admin/DashboardAdmin';
import ReviewSKP from '../pages/admin/laporan/ReviewSKP';
import ReviewBKD from '../pages/admin/laporan/ReviewBKD';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'laporan',
				element: <Laporan />,
			},
			{
				path: 'profil',
				element: <User />,
			},
			{
				path: 'profil/edit',
				element: <EditUser />,
			},
			{
				path: 'profil/change-password',
				element: <ChangePassword />,
			},
		],
	},
	{
		path: 'admin',
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <DashboardAdmin />,
			},
			{
				path: 'reviewSkp',
				element: <ReviewSKP />,
			},
			{
				path: 'reviewBkd',
				element: <ReviewBKD />,
			},
		],
	},
]);
