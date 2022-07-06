const TextInput = (props) => {
	const icon = props.icon;
	const type = props.type;
	const placeholder = props.placeholder;
	const dark = props.theme ?? true;
	if (dark)
		return (
			<div id='text-input-container-dark'>
				<img src={icon} alt='text-input-icon' className='icon ph-20px m-auto' />
				<input type={type} placeholder={placeholder} name={placeholder} />
			</div>
		);
	if (!dark)
		return (
			<div id='text-input-container-light'>
				<img src={icon} alt='text-input-icon' className='icon ph-20px m-auto' />
				<input type={type} placeholder={placeholder} name={placeholder} />
			</div>
		);
};

export default TextInput;
