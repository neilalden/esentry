import { useContext } from "react";
import { ThemeContext } from "../../components/context/theme";
import Header from "../../components/layout/header";
import Nav from "../../components/layout/nav";

const Notifications = () => {
	const { darkMode } = useContext(ThemeContext);
	const theme = darkMode ? "dark" : "light";
	return (
		<div className={`${darkMode ? "bg-gradient-dark" : "bg-gradient-light"}`}>
			<div className='m-auto d-flex flex-row' style={{ maxWidth: "1200px" }}>
				<Nav />
				<div style={{ height: "100%", width: "100%" }} className='mh-20px'>
					<NotificationsTable theme={theme} />
				</div>
			</div>
		</div>
	);
};

const NotificationsTable = (props) => {
	const theme = props.theme;
	return (
		<div className={`br bg-secondary-${theme} pt-20px mt-30px ph-20px h-300px`}>
			<table>
				<tr className={`position-sticky text-${theme}`}>
					<th className='w-250px'>Time</th>
					<th>Description</th>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 1, LLDA 1, MCBA failed to gather Salinity values</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 7, 2022 1:30 pm</td>
					<td>
						user johnd (john.doe@gmail.com) requested to upgrade their account
						type from basic user to special user
					</td>
				</tr>
			</table>
		</div>
	);
};
export default Notifications;
