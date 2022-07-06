const LightModeIcon = (props) => {
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
				d='M13.9286 0H16.0714V5.35714H13.9286V0ZM21.0943 7.39286L24.8507 3.63643L26.3657 5.15143L22.6093 8.90786L21.0943 7.39286ZM24.6429 13.9286H30V16.0714H24.6429V13.9286ZM21.0943 22.6071L22.6093 21.0932L26.3657 24.8496L24.8507 26.3646L21.0943 22.6071ZM13.9286 24.6429H16.0714V30H13.9286V24.6429ZM3.63643 24.8486L7.39286 21.0921L8.90786 22.6071L5.1525 26.3636L3.63643 24.8486ZM0 13.9286H5.35714V16.0714H0V13.9286ZM3.6375 5.15143L5.1525 3.63643L8.90893 7.39286L7.39286 8.90786L3.6375 5.15143ZM15 10.7143C15.8476 10.7143 16.6762 10.9656 17.381 11.4366C18.0858 11.9075 18.6351 12.5768 18.9595 13.3599C19.2839 14.143 19.3687 15.0048 19.2034 15.8361C19.038 16.6674 18.6298 17.4311 18.0305 18.0305C17.4311 18.6298 16.6674 19.038 15.8361 19.2034C15.0048 19.3687 14.143 19.2839 13.3599 18.9595C12.5768 18.6351 11.9075 18.0858 11.4366 17.381C10.9656 16.6762 10.7143 15.8476 10.7143 15C10.7157 13.8638 11.1677 12.7745 11.9711 11.9711C12.7745 11.1677 13.8638 10.7157 15 10.7143ZM15 8.57143C13.7285 8.57143 12.4856 8.94846 11.4285 9.65484C10.3713 10.3612 9.54734 11.3652 9.06077 12.5399C8.57421 13.7146 8.4469 15.0071 8.69495 16.2542C8.943 17.5012 9.55526 18.6466 10.4543 19.5457C11.3534 20.4447 12.4988 21.057 13.7458 21.305C14.9929 21.5531 16.2854 21.4258 17.4601 20.9392C18.6348 20.4527 19.6388 19.6287 20.3452 18.5715C21.0515 17.5143 21.4286 16.2715 21.4286 15C21.4286 13.295 20.7513 11.6599 19.5457 10.4543C18.3401 9.24872 16.705 8.57143 15 8.57143Z'
				fill={fill}
			/>
		</svg>
	);
};
export default LightModeIcon;
