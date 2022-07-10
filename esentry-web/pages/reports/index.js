import { useContext, useState } from "react";
import { ThemeContext } from "../../components/context/theme";
import Nav from "../../components/layout/nav";
import RecordsIcon from "../../components/icons/records";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { Chart, Bar, Line, Doughnut } from "react-chartjs-2";
import MapGIS from "../../components/layout/mapGIS";
import BarScale from "../../components/layout/barScale";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
);

const Reports = () => {
	const { darkMode } = useContext(ThemeContext);
	const fill = darkMode ? "#fff" : "#000";
	const theme = darkMode ? "dark" : "light";
	const textTheme = darkMode ? "text-dark" : "text-light";
	const [currDashboardPage, setCurrDashboardPage] = useState("Temperature");

	return (
		<div className={`${darkMode ? "bg-gradient-dark" : "bg-gradient-light"}`}>
			<div className='m-auto d-flex flex-row' style={{ maxWidth: "1200px" }}>
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
					<div className='d-flex flex-row j-content-space-between'>
						<ReportsMap theme={theme} />
						<ReportsDoughnutChart theme={theme} fill={fill} />
					</div>
					<ReportsLineChart theme={theme} fill={fill} />
				</div>
			</div>
		</div>
	);
};

const ReportsMap = (props) => {
	const theme = props.theme;
	return (
		<div
			className={`bg-secondary-${theme} d-flex flex-row j-content-center br w-50 mr-5px mt-20px h-300px `}>
			<MapGIS />
			<BarScale />
		</div>
	);
};
const ReportsDoughnutChart = (props) => {
	const theme = props.theme;
	const fill = props.fill;
	return (
		<div
			className={`bg-secondary-${theme} br w-50 ml-5px mt-20px  h-300px w-min-fit-content `}>
			<Doughnut
				className='h-100px p-10px'
				data={{
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of Votes",
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)",
							],
							borderWidth: 1,
						},
					],
				}}
				options={{
					maintainAspectRatio: false,
					plugins: {
						legend: {
							position: "right",
							labels: {
								color: fill,
								font: { family: "Source Code Pro, monospace" },
							},
						},
					},
				}}
			/>
		</div>
	);
};

const ReportsLineChart = (props) => {
	const theme = props.theme;
	const fill = props.fill;
	const data = [
		{
			name: "binance",
			priceUsd: 20,
		},
		{
			name: "pegaxi",
			priceUsd: 22,
		},
		{
			name: "slp",
			priceUsd: 21.5,
		},
		{
			name: "siet",
			priceUsd: 19.8,
		},
		{
			name: "eth",
			priceUsd: 23,
		},
	];
	return (
		<div className={`bg-secondary-${theme} br mt-10px mh-auto p-10px h-250px `}>
			<Line
				className='h-100px'
				data={{
					labels: data.map((crypto) => crypto.name),
					datasets: [
						{
							label: "Price in USD",
							data: data.map((crypto) => crypto.priceUsd),
							backgroundColor: [
								"#ffbb11",
								"#ecf0f1",
								"#50AF95",
								"#f3ba2f",
								"#2a71d0",
							],
							borderColor: "rgb(75, 192, 192)",
							tension: 0.3,
							pointRadius: 5,
							pointHoverRadius: 7,
							pointBorderWidth: 2,
						},
					],
				}}
				options={{
					maintainAspectRatio: false,
					plugins: {
						title: {
							display: false,
						},
						legend: {
							display: false,
						},
					},
					scales: {
						y: {
							ticks: {
								beginAtZero: false,
								font: { family: "Source Code Pro, monospace" },
								color: fill,
							},
							grid: {
								color: "#B1BFC9",
							},
						},
						x: {
							ticks: {
								font: { family: "Source Code Pro, monospace" },
								color: fill,
							},
							grid: {
								color: "#B1BFC9",
							},
						},
					},
				}}
			/>
		</div>
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
