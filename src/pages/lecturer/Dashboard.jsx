import {
	faBook,
	faCalendar,
	faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import InformationBar from '../../components/InformationBar';
import ChartLecturer from '../../components/charts/ChartLecturer';

const navigation = [
	{
		name: 'dashboard',
		to: '/',
	},
];

const Dashboard = () => {
	return (
		<main>
			<Header title="Dashboard" navigation={navigation} />

			<section className="flex gap-2">
				<aside className="w-5/12 flex flex-col gap-1">
					<InformationBar
						value="150,2"
						subtitle="Total Nilai Kredit"
						icon={faSquarePollVertical}
						color="text-dark-blue/80"
					/>
					<InformationBar
						value="Asisten Ahli"
						subtitle="Jabatan Fungsional"
						icon={faBook}
						color="text-dark-green/80"
					/>
					<InformationBar
						value="2 Tahun 12 Bulan"
						subtitle="Periode Berlangsung"
						icon={faCalendar}
						color="text-dark-red/80"
					/>
				</aside>
				<aside className="h-[17rem] bg-primary-blue w-7/12 drop-shadow-bottom rounded p-2">
					<p className="text-white text-xs">Grafik Angka Kredit</p>
					<ChartLecturer />
				</aside>
			</section>
		</main>
	);
};

export default Dashboard;
