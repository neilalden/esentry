import { useContext, useState } from "react";
import { ThemeContext } from "../../components/context/theme";
import RecordsIcon from "../../components/icons/records";
import UploadIcon from "../../components/icons/upload";
import UserIcon from "../../components/icons/user";
import Header from "../../components/layout/header";
import Nav from "../../components/layout/nav";

const Dashboard = () => {
	const { darkMode } = useContext(ThemeContext);
	const fill = darkMode ? "#fff" : "#000";
	const theme = darkMode ? "dark" : "light";
	const textTheme = darkMode ? "text-dark" : "text-light";
	const [currDashboardPage, setCurrDashboardPage] = useState("Records");
	return (
		<div
			className={`d-flex flex-row ${
				darkMode ? "bg-gradient-dark" : "bg-gradient-light"
			}`}>
			<Nav />
			<div className='h-100 w-100 mh-20px'>
				<DashboardNav
					fill={fill}
					theme={theme}
					textTheme={textTheme}
					currDashboardPage={currDashboardPage}
					setCurrDashboardPage={setCurrDashboardPage}
				/>
				<RecordsTable theme={theme} />
			</div>
		</div>
	);
};

const RecordsTable = (props) => {
	const theme = props.theme;
	return (
		<div className={`bg-secondary-${theme} br mh-auto ph-20px h-350px `}>
			<table>
				<tr
					className={`text-${theme} bg-secondary-${theme} position-sticky top-0`}>
					<th>Time</th>
					<th>Machine</th>
					<th>Parameter</th>
					<th>Vaue</th>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 1</td>
					<td>Temperature</td>
					<td>31.1 °C</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 2</td>
					<td>Temperature</td>
					<td>30.8 °C</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>Temperature</td>
					<td>31.23 °C</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 1</td>
					<td>Salinity</td>
					<td className={true && `text-danger`}>ERROR</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 2</td>
					<td>Salinity</td>
					<td className={true && `text-danger`}>ERROR</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>Salinity</td>
					<td className={true && `text-danger`}>ERROR</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 1</td>
					<td>pH Level</td>
					<td>9.44 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>LLDA 2</td>
					<td>pH Level</td>
					<td>9.8 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
				<tr className={`text-${theme}`}>
					<td>May 6, 2022 6:00 pm</td>
					<td>MCBA</td>
					<td>pH Level</td>
					<td>9.23 Units</td>
				</tr>
			</table>
		</div>
	);
};

const DashboardNav = (props) => {
	const fill = props.fill;
	const theme = props.theme;
	const textTheme = props.textTheme;
	const currDashboardPage = props.currDashboardPage;
	const setCurrDashboardPage = props.setCurrDashboardPage;

	return (
		<div className='d-flex flex-row j-content-space-between mv-30px '>
			<a
				onClick={() => setCurrDashboardPage("Records")}
				className={`button d-flex flex-row w-fitcontent ph-40px pv-30px ${
					currDashboardPage === "Records"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Records</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("Users")}
				className={`button d-flex flex-row w-fitcontent ph-40px pv-30px ${
					currDashboardPage === "Users"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<UserIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Users</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("Upload")}
				className={`button d-flex flex-row w-fitcontent ph-40px pv-30px ${
					currDashboardPage === "Upload"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<UploadIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Upload</h4>
			</a>
		</div>
	);
};
export default Dashboard;
