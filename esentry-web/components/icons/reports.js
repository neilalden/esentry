const ReportsIcon = (props) => {
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
				d='M26.9991 15.2051H14.795V3.00093C14.795 2.85094 14.6722 2.72821 14.5222 2.72821H13.6359C11.8452 2.72528 10.0715 3.07646 8.41703 3.76155C6.76252 4.44664 5.25981 5.45211 3.99534 6.72012C2.75007 7.96154 1.75786 9.43307 1.07385 11.0529C0.362072 12.733 -0.00316771 14.5395 2.06963e-05 16.3641C-0.00291165 18.1548 0.348268 19.9285 1.03336 21.583C1.71844 23.2375 2.72392 24.7402 3.99193 26.0047C5.24302 27.2558 6.70206 28.241 8.32473 28.9262C10.0048 29.638 11.8113 30.0032 13.6359 30C15.4267 30.0029 17.2003 29.6518 18.8548 28.9667C20.5093 28.2816 22.012 27.2761 23.2765 26.0081C24.5276 24.757 25.5128 23.298 26.198 21.6753C26.9098 19.9952 27.275 18.1887 27.2718 16.3641V15.4778C27.2718 15.3278 27.1491 15.2051 26.9991 15.2051ZM21.6027 24.4025C20.5471 25.4498 19.2952 26.2786 17.9188 26.8414C16.5423 27.4041 15.0684 27.6897 13.5814 27.6819C10.5781 27.6683 7.75544 26.4922 5.63165 24.3684C3.49422 22.231 2.31812 19.3879 2.31812 16.3641C2.31812 13.3403 3.49422 10.4973 5.63165 8.35984C7.49294 6.49854 9.88945 5.36335 12.4769 5.10427V17.5232H24.8958C24.6333 20.1242 23.4878 22.5344 21.6027 24.4025V24.4025ZM29.999 13.3097L29.9104 12.3483C29.6206 9.20867 28.2263 6.24628 25.9832 4.00999C23.7386 1.7696 20.7822 0.383063 17.6244 0.0896687L16.6597 0.0010354C16.4995 -0.0126005 16.3631 0.110123 16.3631 0.270344V13.3642C16.3631 13.5142 16.4858 13.6369 16.6358 13.6369L29.7263 13.6028C29.8865 13.6028 30.0126 13.4665 29.999 13.3097ZM18.6744 11.3256V2.57822C20.8218 3.02768 22.7925 4.09118 24.3469 5.63948C25.9048 7.19397 26.9718 9.17117 27.415 11.3018L18.6744 11.3256Z'
				fill={fill}
			/>
		</svg>
	);
};
export default ReportsIcon;
