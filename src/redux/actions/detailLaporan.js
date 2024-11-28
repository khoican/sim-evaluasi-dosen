export const FETCH_DETAIL_LAPORAN = 'FETCH_DETAIL_LAPORAN';
export const FETCH_DETAIL_BKD_SUCCESS = 'FETCH_DETAIL_BKD_SUCCESS';
export const FETCH_DETAIL_SKP_SUCCESS = 'FETCH_DETAIL_SKP_SUCCESS';
export const FETCH_CLOSE_DETAIL_LAPORAN = 'FETCH_CLOSE_DETAIL_LAPORAN';
export const FETCH_DETAIL_LAPORAN_ERROR = 'FETCH_DETAIL_LAPORAN_ERROR';

export const detailLaporanBKD = (id) => ({
	type: FETCH_DETAIL_BKD_SUCCESS,
	payload: id,
});
export const detailLaporanSKP = (id) => ({
	type: FETCH_DETAIL_SKP_SUCCESS,
	payload: id,
});

export const closeDetailLaporan = () => ({
	type: FETCH_CLOSE_DETAIL_LAPORAN,
});
