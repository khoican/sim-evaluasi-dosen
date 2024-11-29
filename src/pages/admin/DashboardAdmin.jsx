import {
	faBook,
	faCalendar,
	faFileCircleCheck,
	faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import InformationBar from '../../components/InformationBar';
import ChartAdmin from '../../components/charts/ChartAdmin';
import SyaratDosen from '../../elements/SyaratDosen';

const navigation = [
	{
		name: 'dashboard',
		to: '/',
	},
];

const dosen = [
	{
		name: 'Syaiful Bahri S.Kom., M.Kom.',
		jafung: 'Lektor Kepala',
		rekomendasi: 'Guru Besar',
		syarat: {
			TMT: true,
			AngkaKredit: true,
			SyaratKhusus: false,
		},
	},
	{
		name: 'Al El Jedud S.Kom., M.Kom.',
		jafung: 'Lektor Kepala',
		rekomendasi: 'Guru Besar',
		syarat: {
			TMT: true,
			AngkaKredit: true,
			SyaratKhusus: true,
		},
	},
];

const DashboardAdmin = () => {
	return (
		<main>
			<Header title="Dashboard" navigation={navigation} />

			<section>
				<div className="w-full flex gap-2 items-center">
					<InformationBar
						value="200"
						subtitle="Total Dosen"
						icon={faSquarePollVertical}
						color="text-dark-blue/80"
					/>
					<InformationBar
						value="30"
						subtitle="BKD Terkonfirmasi"
						icon={faFileCircleCheck}
						color="text-dark-green/80"
					/>
					<InformationBar
						value="2"
						subtitle="SKP Terkonfirmasi"
						icon={faFileCircleCheck}
						color="text-dark-yellow/80"
					/>
					<InformationBar
						value="20242"
						subtitle="Periode"
						icon={faCalendar}
						color="text-dark-red/80"
					/>
				</div>

				<div className="mt-10">
					<h1 className="text-md font-medium">Jabatan Fungsional</h1>

					<div className="w-full flex gap-2 items-center mt-2">
						<InformationBar
							value="130"
							subtitle="Asisten Ahli"
							icon={faBook}
							color="text-dark-green/80"
						/>
						<InformationBar
							value="30"
							subtitle="Lektor"
							icon={faBook}
							color="text-dark-green/80"
						/>
						<InformationBar
							value="20"
							subtitle="Lektor Kepala"
							icon={faBook}
							color="text-dark-green/80"
						/>
						<InformationBar
							value="20"
							subtitle="Guru Besar"
							icon={faBook}
							color="text-dark-green/80"
						/>
					</div>
				</div>

				<div className="mt-10 flex items-start gap-2">
					<aside className="h-[17rem] bg-white border border-primary-blue w-6/12 drop-shadow-bottom rounded p-2">
						<p className="text-verydark-blue text-xs">
							Grafik Dosen Berdasarkan Jabatan Fungsional
						</p>
						<ChartAdmin />
					</aside>

					<aside className="w-6/12 h-[17rem] bg-white rounded py-2 px-4 drop-shadow-bottom">
						<h3 className="font-medium text-sm">
							Syarat Terpenuhi
						</h3>

						<section className="mt-5 flex flex-col gap-2">
							{dosen.map((item) => (
								<SyaratDosen key={item.name} data={item} />
							))}
						</section>
					</aside>
				</div>
			</section>
		</main>
	);
};

export default DashboardAdmin;
