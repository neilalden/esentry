import Link from "next/link";
import TextInput from "../utils/text-input";
const LoginForm = () => {
	return (
		<div className='w-fitcontent m-auto'>
			<h1 style={{ marginTop: 100 }}>Hello again!</h1>
			<p style={{ marginBottom: 50 }}>
				Are you new here?&nbsp;
				<Link href='#sign-up'>
					<a className='text-blue'>Create an account</a>
				</Link>
			</p>
			<TextInput
				icon={"/static/icons/user-auth.svg"}
				type={"text"}
				placeholder={"username"}
			/>
			<TextInput
				icon={"/static/icons/password-auth.svg"}
				type={"password"}
				placeholder={"password"}
			/>
			<div className='d-flex flex-row j-content-space-between'>
				<Link href='/dashboard'>
					<a className='button bg-primary-dark text-dark pv-15px ph-20px'>
						Login
					</a>
				</Link>
				<Link href='#forgot-password'>
					<a className='button button-link text-dark pv-15px ph-20px'>
						Forgot password?
					</a>
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
