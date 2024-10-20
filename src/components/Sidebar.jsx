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
		<div className="h-[calc(100vh-16px)] bg-white rounded-md drop-shadow-right-bottom flex flex-col justify-between overflow-hidden">
			<div className="py-4 px-3">
				<Logo />
				<div className="mt-20 flex flex-col gap-2 w-full">
					<NavLink
						to="/"
						title="Dashboard"
						icon={faGaugeHigh}
						isActive={true}
					/>
					<NavLink to="/" title="Laporan" icon={faFileContract} />
					<NavLink to="/" title="Profil" icon={faUser} />
				</div>
			</div>

			<div className="border-t border-primary-gray p-3 bg-light-gray flex items-center justify-between">
				<div className="w-4/5 flex items-center gap-2">
					<div className="bg-dark-blue min-h-10 min-w-10 rounded-full flex items-center justify-center">
						<FontAwesomeIcon
							icon={faUserAlt}
							className="text-white h-4 w-4"
						/>
					</div>

					<p className="text-black text-sm font-semibold truncate w-auto">
						Muhammad Nur Sholeh Saifulloh
					</p>
				</div>

				<button className="cursor-pointer w-1/5 flex items-center justify-end">
					<FontAwesomeIcon
						icon={faRightFromBracket}
						className="text-dark-red rotate-180 text-lg"
					/>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
