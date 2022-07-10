const BarScale = () => {
	return (
		<svg id='bar-scale'>
			<rect width='37' height='300' />
			<text x='5' y='10' class='bar-text' id='bar-text-5'>
				5
			</text>
			<text x='5' y='78' class='bar-text' id='bar-text-4'>
				4
			</text>
			<text x='5' y='155' class='bar-text' id='bar-text-3'>
				3
			</text>
			<text x='5' y='223' class='bar-text' id='bar-text-2'>
				2
			</text>
			<text x='5' y='295' class='bar-text' id='bar-text-1'>
				1
			</text>
		</svg>
	);
};
export default BarScale;
