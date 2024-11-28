import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../../components/Header';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../elements/Button';
import FormPassword from '../../../elements/forms/FormPassword';

const navigation = [
	{
		name: 'profil',
		to: '/profil',
	},
	{
		name: 'ganti password',
		to: '/profil/change-password',
	},
];

const ChangePassword = () => {
	return (
		<>
			<Header title="Ganti Password" navigation={navigation} />

			<main className="w-full h-auto px-5 py-8 bg-white rounded drop-shadow-bottom flex items-start gap-6">
				<aside className="w-1/3 flex flex-col items-center justify-center gap-10">
					<section className="flex items-center justify-center h-40 w-40 rounded-full bg-primary-gray">
						<FontAwesomeIcon
							icon={faUser}
							className="text-8xl text-dark-gray"
						/>
					</section>
				</aside>
				<form className="w-2/3 flex flex-col gap-6">
					<FormPassword
						label={'Password Lama'}
						value={'123456789011223344'}
					/>
					<FormPassword
						label={'Password Baru'}
						value={'Muhammad Nur Sholeh'}
					/>
					<FormPassword
						label={'Konfirmasi Password Baru'}
						value={'Muhammad Nur Sholeh'}
					/>

					<section className="flex items-center gap-2 justify-end">
						<Button
							title={'Batal'}
							textSize={'sm'}
							color={'dark-red'}
							isBordered
						/>
						<Button
							title={'Simpan'}
							textSize={'sm'}
							color={'primary-blue'}
						/>
					</section>
				</form>
			</main>
		</>
	);
};

export default ChangePassword;
