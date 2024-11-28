import {
	FETCH_CLOSE_DETAIL_LAPORAN,
	FETCH_DETAIL_BKD_SUCCESS,
	FETCH_DETAIL_LAPORAN,
	FETCH_DETAIL_LAPORAN_ERROR,
	FETCH_DETAIL_SKP_SUCCESS,
} from '../actions/detailLaporan';

const initialState = {
	isLoading: false,
	error: null,
	data: null,
	openBKD: false,
	openSKP: false,
};

const detailLaporan = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DETAIL_LAPORAN:
			return {
				...state,
				isLoading: true,
				error: null,
				data: null,
			};
		case FETCH_DETAIL_BKD_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				data: action.payload,
				openBKD: true,
			};
		case FETCH_DETAIL_SKP_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				data: action.payload,
				openSKP: true,
			};
		case FETCH_CLOSE_DETAIL_LAPORAN:
			return {
				...state,
				isLoading: false,
				error: null,
				data: null,
				openBKD: false,
				openSKP: false,
			};
		case FETCH_DETAIL_LAPORAN_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
				data: null,
			};
		default:
			return state;
	}
};

export default detailLaporan;
