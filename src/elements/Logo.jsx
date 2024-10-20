import logo from '../assets/images/logo.png';

const Logo = () => {
	return (
		<div className="flex items-center gap-1">
			<img src={logo} alt="" className="w-14 h-14" />
			<div>
				<p className="text-xs font-semibold tracking-widest">
					SISTEM INFORMASI
				</p>
				<p className="text-lg font-extrabold -mt-1">EVALUASI DOSEN</p>
			</div>
		</div>
	);
};

export default Logo;
