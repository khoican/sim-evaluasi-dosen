import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../../components/Header';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../elements/Button';
import FormInput from '../../../elements/forms/FormInput';
import FormSelect from '../../../elements/forms/FormSelect';

const navigation = [
	{
		name: 'profil',
		to: '/profil',
	},
	{
		name: 'edit',
		to: '/profil/edit',
	},
];

const jafung = ['Asisten Ahli', 'Lektor', 'Lektor Kepala', 'Guru Besar'];

const EditUser = () => {
	return (
		<>
			<Header title="Ubah Biodata" navigation={navigation} />

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
					<FormInput
						label={'NIP / NIDN'}
						value={'123456789011223344'}
					/>
					<FormInput
						label={'Nama Lengkap'}
						value={'Muhammad Nur Sholeh'}
					/>
					<FormInput
						label={'Jabatan'}
						value={'Kepala Program Studi Teknik Informatika'}
					/>
					<FormSelect
						label={'Jabatan Fungsional'}
						variant={'p-1 text-sm font-medium'}
					>
						<option>Pilih Jabatan Fungsional</option>
						{jafung.map((item) => (
							<option key={item}>{item}</option>
						))}
					</FormSelect>
					<FormInput
						label={'Terhitung Mulai Tanggal'}
						value={'12 Desember 2022'}
					/>
					<FormInput label={'Nilai Kredit'} value={'130,5'} />

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

export default EditUser;
