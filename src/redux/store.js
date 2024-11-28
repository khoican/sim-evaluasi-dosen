import { configureStore } from '@reduxjs/toolkit';
import detailLaporan from './reducers/detailLaporan';

export default configureStore({
	reducer: {
		laporan: detailLaporan,
	},
});
