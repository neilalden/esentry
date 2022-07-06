import About from "../../components/layout/about";
import LoginForm from "../../components/layout/login-form";
import Logo from "../../components/utils/logo";

const Login = () => {
	return (
		<section className='d-flex flex-row w-100 h-100vh'>
			<div
				id='auth-section'
				className='bg-gradient-dark text-dark w-50 h-100vh'>
				<Logo color={"#fff"} />
				<LoginForm />
			</div>
			<div id='about-section' className='text-light w-50 h-100vh'>
				<About />
			</div>
		</section>
	);
};
export default Login;
