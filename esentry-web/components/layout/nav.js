import DarkModeIcon from "../icons/dark-mode";
import LightModeIcon from "../icons/light-mode";
import NotificationsIcon from "../icons/notifications";
import DashboardIcon from "../icons/dashboard";
import ReportsIcon from "../icons/reports";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { useRouter } from "next/router";
import Header from "./header";

const Nav = () => {
	const { darkMode, toggleTheme } = useContext(ThemeContext);
	const fill = darkMode ? "#fff" : "#000";
	const theme = darkMode ? "dark" : "light";
	const textTheme = darkMode ? "text-dark" : "text-light";

	const { pathname } = useRouter();
	const currPage = pathname.split("/")[1];
	return (
		<div id='nav' className='position-sticky h-100vh'>
			<div className='position-fixed'>
				<Header />
				<Link href='/dashboard'>
					<a
						className={`button d-flex flex-row w-fitcontent ph-20px pv-15px ml-20px ${
							currPage === "dashboard" && `bg-primary-${theme}`
						}`}>
						<DashboardIcon fill={fill} />
						<h4 className={`ml-20px ${textTheme}`}>dashboard</h4>
					</a>
				</Link>
				<Link href='/reports'>
					<a
						className={`button d-flex flex-row w-fitcontent ph-20px pv-15px ml-20px ${
							currPage === "reports" && `bg-primary-${theme}`
						}`}>
						<ReportsIcon fill={fill} />
						<h4 className={`ml-20px ${textTheme}`}>reports</h4>
					</a>
				</Link>
				<Link href='/notifications'>
					<a
						className={`button d-flex flex-row w-fitcontent ph-20px pv-15px ml-20px ${
							currPage === "notifications" && `bg-primary-${theme}`
						}`}>
						<NotificationsIcon fill={fill} />
						<h4 className={`ml-20px ${textTheme}`}>notifications</h4>
					</a>
				</Link>
				<ThemeButton
					fill={fill}
					textTheme={textTheme}
					darkMode={darkMode}
					toggleTheme={toggleTheme}
				/>
			</div>
		</div>
	);
};

const ThemeButton = (props) => {
	const darkMode = props.darkMode;
	const toggleTheme = props.toggleTheme;
	const fill = props.fill;
	const textTheme = props.textTheme;
	if (darkMode)
		return (
			<a
				className='d-flex flex-row w-fitcontent ph-20px pv-15px ml-20px button'
				onClick={toggleTheme}>
				<DarkModeIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>dark mode</h4>
			</a>
		);
	else
		return (
			<a
				className='d-flex flex-row w-fitcontent ph-20px pv-15px ml-20px button'
				onClick={toggleTheme}>
				<LightModeIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>light mode</h4>
			</a>
		);
};
export default Nav;
