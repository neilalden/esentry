const DarkModeIcon = (props) => {
	const fill = props.fill ?? "#000";
	return (
		<svg
			className='icon'
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M15.0339 30C10.83 30 7.27308 28.545 4.36318 25.6351C1.45439 22.7264 0 19.17 0 14.9661C0 11.1241 1.25283 7.78987 3.75848 4.96349C6.26414 2.13823 9.46581 0.488951 13.3635 0.0156603C14.0595 -0.0678615 14.6024 0.182704 14.9922 0.767357C15.3819 1.35201 15.368 1.9645 14.9504 2.60484C14.4771 3.32869 14.1219 4.09431 13.8847 4.90169C13.6486 5.70907 13.5305 6.5582 13.5305 7.4491C13.5305 9.95476 14.4075 12.0846 16.1615 13.8385C17.9154 15.5925 20.0452 16.4695 22.5509 16.4695C23.414 16.4695 24.2703 16.3442 25.12 16.0936C25.9686 15.843 26.727 15.495 27.3952 15.0496C27.9798 14.6598 28.5784 14.6387 29.1909 14.9861C29.8034 15.3347 30.0679 15.8848 29.9843 16.6365C29.5946 20.4785 27.9592 23.6663 25.0783 26.1998C22.1962 28.7333 18.8481 30 15.0339 30ZM15.0339 26.6591C17.4839 26.6591 19.6833 25.9843 21.6322 24.6346C23.581 23.2837 25.0009 21.5225 25.8918 19.351C25.335 19.4902 24.7781 19.6015 24.2213 19.6851C23.6645 19.7686 23.1077 19.8103 22.5509 19.8103C19.1265 19.8103 16.2099 18.6065 13.8011 16.1989C11.3935 13.7901 10.1897 10.8735 10.1897 7.4491C10.1897 6.89229 10.2314 6.33548 10.3149 5.77867C10.3985 5.22186 10.5098 4.66504 10.649 4.10823C8.47747 4.99913 6.71683 6.419 5.36711 8.36784C4.01629 10.3167 3.34087 12.5161 3.34087 14.9661C3.34087 18.1956 4.48234 20.9518 6.76527 23.2347C9.0482 25.5177 11.8044 26.6591 15.0339 26.6591Z'
				fill={fill}
			/>
		</svg>
	);
};
export default DarkModeIcon;