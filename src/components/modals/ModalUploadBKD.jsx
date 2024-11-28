import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormInput from '../../elements/forms/FormInput';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../../elements/Button';
import { useState } from 'react';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

const ModalUploadBKD = (props) => {
	const { onClick, isUpdate } = props;
	const [links, setLinks] = useState(['', '', '']);
	const [file, setFile] = useState(true);

	const handleAddLink = () => {
		setLinks([...links, '']);
	};

	const handleCloseModal = (e) => {
		if (e.target === e.currentTarget) {
			onClick();
		}
	};

	const handleChangeFile = () => {
		setFile(!file);
	};

	return (
		<>
			{isUpdate ? (
				<div
					className="w-full h-screen z-10 fixed top-0 left-0 bg-light-gray/30 flex items-center justify-center"
					onClick={handleCloseModal}
				>
					<main className="w-1/3 h-auto bg-white rounded p-5 drop-shadow-bottom">
						<header className="mb-8 flex items-center justify-between">
							<h1 className="text-md font-semibold">
								BKD Tahun Ajaran 20242
							</h1>

							<FontAwesomeIcon
								icon={faXmark}
								className="text-md cursor-pointer text-dark-gray hover:text-black"
								onClick={onClick}
							/>
						</header>

						<section className="flex flex-col gap-4">
							{file ? (
								<section className="flex items-center justify-between">
									<div>
										<h1 className="text-xs font-medium">
											Fille BKD
										</h1>
										<a
											href=""
											target="_blank"
											className="text-sm text-dark-blue hover:text-verydark-blue"
										>
											<FontAwesomeIcon icon={faFileAlt} />{' '}
											{''}
											Lihat file BKD anda di sini
										</a>
									</div>
									<Button
										title={'Ubah File'}
										textSize={'xs'}
										color={'dark-gray'}
										onClick={handleChangeFile}
									/>
								</section>
							) : (
								<section className="flex items-end gap-2 w-full">
									<FormInput
										label={'File BKD'}
										type={'file'}
									/>
									<Button
										title={'Batal'}
										textSize={'xs'}
										color={'dark-gray'}
										onClick={handleChangeFile}
									/>
								</section>
							)}
							<FormInput label={'Nilai Kredit'} value={'100'} />

							<section>
								<p className="text-xs font-medium mb-1">
									Link Artikel
								</p>
								<section className="flex flex-col gap-1">
									{links.map((link, index) => (
										<FormInput
											key={index}
											value={link}
											type={'text'}
											isLink
										/>
									))}
								</section>
								<section className="mt-2 flex justify-end">
									<Button
										title={'Tambah Link'}
										icon={faPlus}
										textSize={'xs'}
										color={'dark-gray'}
										onClick={handleAddLink}
									/>
								</section>
							</section>
						</section>

						<footer className="flex justify-end items-center gap-2 mt-8">
							<Button
								title={'Batal'}
								textSize={'sm'}
								color={'dark-red'}
								isBordered
							/>
							<Button
								title={'Perbarui'}
								textSize={'sm'}
								color={'primary-blue'}
							/>
						</footer>
					</main>
				</div>
			) : (
				<div
					className="w-full h-screen z-10 fixed top-0 left-0 bg-light-gray/30 flex items-center justify-center"
					onClick={handleCloseModal}
				>
					<main className="w-1/3 h-auto bg-white rounded p-5 drop-shadow-bottom">
						<header className="mb-8 flex items-center justify-between">
							<h1 className="text-md font-semibold">
								Unggah BKD
							</h1>

							<FontAwesomeIcon
								icon={faXmark}
								className="text-md cursor-pointer text-dark-gray hover:text-black"
								onClick={onClick}
							/>
						</header>

						<section className="flex flex-col gap-4">
							<FormInput label={'File BKD'} type={'file'} />
							<FormInput label={'Nilai Kredit'} />

							<section>
								<p className="text-xs font-medium mb-1">
									Link Artikel
								</p>
								<section className="flex flex-col gap-1">
									{links.map((link, index) => (
										<FormInput
											key={index}
											value={link}
											type={'text'}
											isLink
										/>
									))}
								</section>
								<section className="mt-2 flex justify-end">
									<Button
										title={'Tambah Link'}
										icon={faPlus}
										textSize={'xs'}
										color={'dark-gray'}
										onClick={handleAddLink}
									/>
								</section>
							</section>
						</section>

						<footer className="flex justify-end items-center gap-2 mt-8">
							<Button
								title={'Batal'}
								textSize={'sm'}
								color={'dark-red'}
								isBordered
							/>
							<Button
								title={'Unggah'}
								textSize={'sm'}
								color={'primary-blue'}
							/>
						</footer>
					</main>
				</div>
			)}
		</>
	);
};

export default ModalUploadBKD;
