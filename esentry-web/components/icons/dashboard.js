const DashboardIcon = (props) => {
	const fill = props.fill ?? "#fff";
	return (
		<svg
			className='icon'
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.33333 30C2.41667 30 1.63167 29.6739 0.978333 29.0217C0.326111 28.3683 0 27.5833 0 26.6667V3.33333C0 2.41667 0.326111 1.63167 0.978333 0.978333C1.63167 0.326111 2.41667 0 3.33333 0H26.6667C27.5833 0 28.3683 0.326111 29.0217 0.978333C29.6739 1.63167 30 2.41667 30 3.33333V26.6667C30 27.5833 29.6739 28.3683 29.0217 29.0217C28.3683 29.6739 27.5833 30 26.6667 30H3.33333ZM3.33333 26.6667H13.3333V3.33333H3.33333V26.6667ZM16.6667 26.6667H26.6667V15H16.6667V26.6667ZM16.6667 11.6667H26.6667V3.33333H16.6667V11.6667Z'
				fill={fill}
			/>
		</svg>
	);
};
export default DashboardIcon;