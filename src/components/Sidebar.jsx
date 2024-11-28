import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../elements/Logo';
import {
	faFileContract,
	faRightFromBracket,
	faUser,
	faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import NavLink from '../elements/NavLink';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons/faGaugeHigh';

const Sidebar = () => {
	return (
		<nav className="h-[calc(100vh-16px)] bg-white rounded-md drop-shadow-right-bottom flex flex-col justify-between overflow-hidden">
			<section className="py-4 px-3">
				<Logo />
				<main className="mt-20 flex flex-col gap-1 w-full">
					<NavLink
						to="/"
						title="Dashboard"
						icon={faGaugeHigh}
						isActive={true}
					/>
					<NavLink
						to="/laporan?type=bkd"
						title="Laporan"
						icon={faFileContract}
					/>
					<NavLink to="/profil" title="Profil" icon={faUser} />
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
						Muhammad Nur Sholeh Saifulloh
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

export default Sidebar;
