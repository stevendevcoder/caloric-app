import React, { useState } from 'react';
import '../styles/Input.scss';
import PropTypes from 'prop-types';

export default function Input({messageError,type, label}) {
	const [showPassword, setShowPassword] = useState(false);
	const color = messageError.length ? 'error' : '';
	

	return (
		<label>
			{label}
			<div className='input'>
				<input  className={color} type={showPassword ? 'text' : type} />
				{type === 'password' && <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'hidden': 'show'}</button>}
			</div>
			{messageError.length > 0 && <div>{messageError}</div>}
		</label>
   
		
	);
}
Input.defaultProps = {
	type: 'text', 
	messageError: '', 
};

Input.propTypes = {
	messageError: PropTypes.string, 
	type: PropTypes.string, 
	label: PropTypes.string
};