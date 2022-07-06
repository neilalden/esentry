import Link from "next/link";
import { useContext } from "react";
import Logo from "../../components/utils/logo";
import { ThemeContext } from "../context/theme";

const Header = () => {
	const { darkMode } = useContext(ThemeContext);
	const textTheme = darkMode ? "text-dark" : "text-light";
	return (
		<div id='header-container'>
			<Logo />
			<Link href='/login'>
				<div className='d-flex flex-row m-20px cursor-pointer'>
					<img
						src='/static/icons/user-auth.svg'
						alt='user-image'
						className='user-img'
					/>
					<div className='text-align-left'>
						<h6 className={textTheme}>username</h6>
						<span className={textTheme}>admin</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Header;
