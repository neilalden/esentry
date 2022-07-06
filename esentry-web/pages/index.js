import About from "../components/layout/about";
import LoginForm from "../components/layout/login-form";
import Logo from "../components/utils/logo";

const Dashboard = () => {
	return (
		<section className='d-flex flex-row w-100 vh-100'>
			<div id='auth-section' className='bg-gradient-dark text-dark w-50 vh-100'>
				<Logo color={"#fff"} />
				<LoginForm />
			</div>
			<div id='about-section' className='text-light w-50 vh-100'>
				<About />
			</div>
		</section>
	);
};
export default Dashboard;
