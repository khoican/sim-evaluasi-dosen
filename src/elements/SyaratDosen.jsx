import {
	faArrowRight,
	faCheck,
	faUser,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SyaratDosen = (props) => {
	const { data } = props;

	return (
		<section className="flex items-center justify-between">
			<div className="flex items-center gap-4 w-full">
				<div className="flex items-center justify-center w-8 h-8 rounded-full bg-dark-gray">
					<FontAwesomeIcon
						icon={faUser}
						className="text-light-gray"
					/>
				</div>

				<div className="w-2/3">
					<h1 className="text-sm font-semibold">{data.name}</h1>
					<div className="text-xs text-center font-light flex items-center justify-center gap-3">
						<p>{data.jafung}</p>
						<FontAwesomeIcon icon={faArrowRight} />
						<p className="font-semibold">{data.rekomendasi}</p>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center gap-1">
				<div
					className={`relative flex items-center justify-center w-8 h-8 rounded ${
						data.syarat.TMT ? 'bg-dark-green' : 'bg-dark-red'
					}`}
				>
					<FontAwesomeIcon
						icon={data.syarat.TMT ? faCheck : faXmark}
						className="text-light-gray"
					/>
				</div>
				<div
					className={`flex items-center justify-center w-8 h-8 rounded ${
						data.syarat.AngkaKredit
							? 'bg-dark-green'
							: 'bg-dark-red'
					}`}
				>
					<FontAwesomeIcon
						icon={data.syarat.AngkaKredit ? faCheck : faXmark}
						className="text-light-gray"
					/>
				</div>
				<div
					className={`flex items-center justify-center w-8 h-8 rounded ${
						data.syarat.SyaratKhusus
							? 'bg-dark-green'
							: 'bg-dark-red'
					}`}
				>
					<FontAwesomeIcon
						icon={data.syarat.SyaratKhusus ? faCheck : faXmark}
						className="text-light-gray"
					/>
				</div>
			</div>
		</section>
	);
};

export default SyaratDosen;
