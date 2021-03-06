const RecordsIcon = (props) => {
	const fill = props.fill ?? "#fff";
	return (
		<svg
			width='32'
			height='30'
			viewBox='0 0 32 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M28.3333 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H28.3333C30.1667 30 31.6667 28.5 31.6667 26.6667V3.33333C31.6667 1.5 30.1667 0 28.3333 0ZM28.3333 3.33333V8.33333H3.33333V3.33333H28.3333ZM20 26.6667H11.6667V11.6667H20V26.6667ZM3.33333 11.6667H8.33333V26.6667H3.33333V11.6667ZM23.3333 26.6667V11.6667H28.3333V26.6667H23.3333Z'
				fill={fill}
			/>
		</svg>
	);
};
export default RecordsIcon;
