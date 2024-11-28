import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormInput from '../../elements/forms/FormInput';
import { faFileAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../../elements/Button';
import { useState } from 'react';

const ModalUploadSKP = (props) => {
	const { onClick, isUpdate } = props;

	const [file, setFile] = useState(true);

	const handleChangeFile = () => {
		setFile(!file);
	};

	const handleCloseModal = (e) => {
		if (e.target === e.currentTarget) {
			onClick();
		}
	};

	return (
		<div
			className="w-full h-screen z-10 fixed top-0 left-0 bg-light-gray/30 flex items-center justify-center"
			onClick={handleCloseModal}
		>
			{isUpdate ? (
				<main className="w-1/3 h-auto bg-white rounded p-5 drop-shadow-bottom">
					<header className="mb-8 flex items-center justify-between">
						<h1 className="text-md font-semibold">
							SKP Tahun 2024
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
										Fille SKP
									</h1>
									<a
										href=""
										target="_blank"
										className="text-sm text-dark-blue hover:text-verydark-blue"
									>
										<FontAwesomeIcon icon={faFileAlt} />{' '}
										{''}
										Lihat file SKP anda di sini
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
								<FormInput label={'File SKP'} type={'file'} />
								<Button
									title={'Batal'}
									textSize={'xs'}
									color={'dark-gray'}
									onClick={handleChangeFile}
								/>
							</section>
						)}
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
			) : (
				<main className="w-1/3 h-auto bg-white rounded p-5 drop-shadow-bottom">
					<header className="mb-8 flex items-center justify-between">
						<h1 className="text-md font-semibold">Unggah SKP</h1>

						<FontAwesomeIcon
							icon={faXmark}
							className="text-md cursor-pointer text-dark-gray hover:text-black"
							onClick={onClick}
						/>
					</header>

					<section className="flex flex-col gap-4">
						<FormInput label={'File BKD'} type={'file'} />
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
			)}
		</div>
	);
};

export default ModalUploadSKP;
