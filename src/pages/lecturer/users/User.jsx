import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../../components/Header';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ProfileDesk from '../../../elements/ProfileDesk';
import NavLink from '../../../elements/NavLink';

const navigation = [
	{
		name: 'profil',
		to: '/profil',
	},
];

const User = () => {
	return (
		<>
			<Header title="Profil" navigation={navigation} />

			<main className="w-full h-auto px-5 py-8 bg-white rounded drop-shadow-bottom flex items-start gap-6">
				<aside className="w-1/3 flex flex-col items-center justify-center gap-10">
					<section className="flex items-center justify-center h-40 w-40 rounded-full bg-primary-gray">
						<FontAwesomeIcon
							icon={faUser}
							className="text-8xl text-dark-gray"
						/>
					</section>

					<section className="flex items-center gap-2">
						<NavLink
							title={'Ubah Biodata'}
							textSize={'sm'}
							to={'/profil/edit'}
							isActive
						/>
						<NavLink
							title={'Ubah Password'}
							textSize={'sm'}
							to={'/profil/change-password'}
							isDangerous
							isBordered
						/>
					</section>
				</aside>
				<aside className="w-2/3 flex flex-col gap-6">
					<ProfileDesk
						title={'NIP / NIDN'}
						value={'123456789011223344'}
					/>
					<ProfileDesk
						title={'Nama Lengkap'}
						value={'Muhammad Nur Sholeh'}
					/>
					<ProfileDesk
						title={'Jabatan'}
						value={'Kepala Program Studi Teknik Informatika'}
					/>
					<ProfileDesk
						title={'Jabatan Fungsional'}
						value={'Lektor Kepala'}
					/>
					<ProfileDesk
						title={'Terhitung Mulai Tanggal'}
						value={'12 Desember 2022'}
					/>
					<ProfileDesk title={'Nilai Kredit'} value={'130,5'} />
				</aside>
			</main>
		</>
	);
};

export default User;
