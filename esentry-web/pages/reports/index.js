import { useContext, useState } from "react";
import { ThemeContext } from "../../components/context/theme";
import Header from "../../components/layout/header";
import Nav from "../../components/layout/nav";
import RecordsIcon from "../../components/icons/records";
import UploadIcon from "../../components/icons/upload";
import UserIcon from "../../components/icons/user";

const Reports = () => {
	const { darkMode } = useContext(ThemeContext);
	const fill = darkMode ? "#fff" : "#000";
	const theme = darkMode ? "dark" : "light";
	const textTheme = darkMode ? "text-dark" : "text-light";
	const [currDashboardPage, setCurrDashboardPage] = useState("Temperature");

	return (
		<div
			className={`d-flex flex-row ${
				darkMode ? "bg-gradient-dark" : "bg-gradient-light"
			}`}>
			<Nav />
			<div
				style={{ height: "100%", width: "100%" }}
				className='mh-20px overflow-x-scroll'>
				<ReportsdNav
					fill={fill}
					theme={theme}
					textTheme={textTheme}
					currDashboardPage={currDashboardPage}
					setCurrDashboardPage={setCurrDashboardPage}
				/>
				<ReportsLineChart theme={theme} />
				<div className='d-flex flex-row j-content-space-between'>
					<ReportsMap theme={theme} />
					<ReportsPieChart theme={theme} />
				</div>
			</div>
		</div>
	);
};

const ReportsMap = (props) => {
	const theme = props.theme;
	return (
		<div className={`bg-secondary-${theme} br w-50 mr-5px h-250px `}></div>
	);
};
const ReportsPieChart = (props) => {
	const theme = props.theme;
	return (
		<div className={`bg-secondary-${theme} br w-50 ml-5px h-250px `}></div>
	);
};

const ReportsLineChart = (props) => {
	const theme = props.theme;
	return (
		<div
			className={`bg-secondary-${theme} br mv-10px mh-auto ph-20px h-250px `}></div>
	);
};

const ReportsdNav = (props) => {
	const fill = props.fill;
	const theme = props.theme;
	const textTheme = props.textTheme;
	const currDashboardPage = props.currDashboardPage;
	const setCurrDashboardPage = props.setCurrDashboardPage;

	return (
		<div className='d-flex flex-row overflow-x-scroll pb-15px mt-30px '>
			<a
				onClick={() => setCurrDashboardPage("Temperature")}
				className={`button d-flex flex-row w-min-fit-content h-90px align-items-center m-auto mr-20px ph-40px ${
					currDashboardPage === "Temperature"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Temperature</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("pH level")}
				className={`button d-flex flex-row w-min-fit-content h-90px align-items-center m-auto mh-20px ph-40px ${
					currDashboardPage === "pH level"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>pH level</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("Salinity")}
				className={`button d-flex flex-row w-min-fit-content h-90px align-items-center m-auto mh-20px ph-40px ${
					currDashboardPage === "Salinity"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Salinity</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("Ammonium")}
				className={`button d-flex flex-row w-min-fit-content h-90px align-items-center m-auto mh-20px ph-40px ${
					currDashboardPage === "Ammonium"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Ammonium</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("Nitrate")}
				className={`button d-flex flex-row w-min-fit-content h-90px align-items-center m-auto mh-20px ph-40px ${
					currDashboardPage === "Nitrate"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Nitrate</h4>
			</a>
			<a
				onClick={() => setCurrDashboardPage("Chloride")}
				className={`button d-flex flex-row w-min-fit-content h-90px align-items-center m-auto ml-20px ph-40px ${
					currDashboardPage === "Chloride"
						? `bg-primary-${theme}`
						: `bg-secondary-${theme}`
				}`}>
				<RecordsIcon fill={fill} />
				<h4 className={`ml-20px ${textTheme}`}>Chloride</h4>
			</a>
		</div>
	);
};
export default Reports;
