import About from "../../components/layout/about";
import LoginForm from "../../components/layout/login-form";
import Logo from "../../components/utils/logo";

const Login = () => {
	return (
		<section className='d-flex flex-row'>
			<div className='bg-gradient-dark text-dark w-50 '>
				<Logo color={"#fff"} />
				<LoginForm />
			</div>
			<div className='text-light w-50'>
				<About />
			</div>
		</section>
	);
};
export default Login;
