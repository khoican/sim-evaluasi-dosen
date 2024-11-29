import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../elements/Logo';
import {
	faCalendar,
	faClockRotateLeft,
	faFileContract,
	faRightFromBracket,
	faUserAlt,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import NavLink from '../elements/NavLink';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons/faGaugeHigh';

const SidebarAdmin = () => {
	return (
		<nav className="h-[calc(100vh-16px)] bg-white rounded-md drop-shadow-right-bottom flex flex-col justify-between overflow-hidden">
			<section className="py-4 px-3">
				<Logo />
				<main className="mt-14 flex flex-col gap-1 w-full">
					<NavLink
						to="/"
						title="Dashboard"
						icon={faGaugeHigh}
						isActive={true}
					/>
					<NavLink
						to="/review?type=skp"
						title="Review SKP"
						icon={faFileContract}
					/>
					<NavLink
						to="/review?type=bkd"
						title="Review BKD"
						icon={faFileContract}
					/>
					<NavLink
						to="/lecturers"
						title="Data Dosen"
						icon={faUsers}
					/>
					<NavLink to="/period" title="Periode" icon={faCalendar} />
					<NavLink
						to="/activity"
						title="Log Aktifitas"
						icon={faClockRotateLeft}
					/>
				</main>
			</section>

			<footer className="border-t border-primary-gray p-3 bg-light-gray flex items-center justify-between">
				<aside className="w-4/5 flex items-center gap-2">
					<section className="bg-dark-blue min-h-10 min-w-10 rounded-full flex items-center justify-center">
						<FontAwesomeIcon
							icon={faUserAlt}
							className="text-white h-4 w-4"
						/>
					</section>

					<p className="text-black text-sm font-semibold truncate w-auto">
						Pimpinan Fakultas Teknik
					</p>
				</aside>

				<button className="cursor-pointer w-1/5 flex items-center justify-end">
					<FontAwesomeIcon
						icon={faRightFromBracket}
						className="text-dark-red rotate-180 text-lg"
					/>
				</button>
			</footer>
		</nav>
	);
};

export default SidebarAdmin;
