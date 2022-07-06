import { useContext } from "react";
import { ThemeContext } from "../context/theme";

const Logo = (props) => {
	const { darkMode, toggleTheme } = useContext(ThemeContext);
	const textTheme = props.color ?? darkMode ? "text-dark" : "text-light";
	return (
		<h1 id='logo-text' className={textTheme}>
			e-sentry
		</h1>
	);
};

export default Logo;
