import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayouts';
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
		],
	},
]);
