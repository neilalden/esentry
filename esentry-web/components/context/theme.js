import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};
	return (
		<ThemeContext.Provider value={{ darkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
